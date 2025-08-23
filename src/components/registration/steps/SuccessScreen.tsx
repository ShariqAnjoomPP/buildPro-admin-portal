import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface SuccessScreenProps {
  onComplete: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // Auto-redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto p-8 text-center shadow-dramatic">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-success" />
              </div>
              {/* Success Animation Ring */}
              <div className="absolute inset-0 w-20 h-20 border-4 border-success/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Success Message */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              You're All Set!
            </h1>
            <p className="text-muted-foreground text-lg">
              Thank you for registering. Your portal is being set up, and you'll be redirected to your dashboard in a moment.
            </p>
          </div>

          {/* Loading Indicator */}
          <div className="mb-6">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-primary h-2 rounded-full animate-pulse w-3/4"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Setting up your workspace...
            </p>
          </div>

          {/* Action Button */}
          <Button 
            onClick={onComplete}
            size="lg"
            className="w-full bg-gradient-primary hover:shadow-elevated"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Auto-redirect Notice */}
          <p className="text-xs text-muted-foreground mt-4">
            You'll be automatically redirected in a few seconds
          </p>
        </Card>
      </div>
    </div>
  );
};