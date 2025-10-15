import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BjorkLayout } from "@/components/BjorkLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Pieslēgšanās kļūda",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Pieslēgšanās kļūda",
        description: "Radās neparedzēta kļūda",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        toast({
          title: "Reģistrācijas kļūda",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Reģistrācija veiksmīga",
          description: "Pārbaudiet savu e-pastu, lai apstiprinātu kontu",
        });
      }
    } catch (error) {
      toast({
        title: "Reģistrācijas kļūda",
        description: "Radās neparedzēta kļūda",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BjorkLayout>
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-medium">
              {isSignUp ? "Izveidot kontu" : "Pieslēgties"}
            </CardTitle>
            <CardDescription>
              {isSignUp 
                ? "Izveidojiet jaunu kontu, lai piekļūtu apmācību materiāliem"
                : "Pieslēdzieties savam kontam, lai piekļūtu apmācību materiāliem"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-pasta adrese</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jūsu@epasts.lv"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Parole</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ievadiet paroli"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {!isSignUp && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Atcerēties paroli
                  </Label>
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Apstrādā..." : (isSignUp ? "Izveidot kontu" : "Pieslēgties")}
              </Button>
            </form>

            {/* Hidden for now - uncomment to reactivate account creation
            <div className="mt-6 text-center">
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm"
              >
                {isSignUp 
                  ? "Jau ir konts? Pieslēdzieties" 
                  : "Nav konta? Izveidojiet jaunu"
                }
              </Button>
            </div>
            */}
          </CardContent>
        </Card>
      </div>
    </BjorkLayout>
  );
};

export default Login;
