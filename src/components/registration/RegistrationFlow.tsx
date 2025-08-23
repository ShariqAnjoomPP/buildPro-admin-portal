import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BasicDetails } from './steps/BasicDetails';
import { ExpertiseServices } from './steps/ExpertiseServices';
import { CompanySize } from './steps/CompanySize';
import { Locations } from './steps/Locations';
import { SuccessScreen } from './steps/SuccessScreen';

export interface RegistrationData {
  companyName: string;
  website: string;
  description: string;
  services: string[];
  customServices: string;
  companySize: string;
  locations: string[];
}

const initialData: RegistrationData = {
  companyName: '',
  website: '',
  description: '',
  services: [],
  customServices: '',
  companySize: '',
  locations: [],
};

export const RegistrationFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<RegistrationData>(initialData);
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: 'Basic Details', component: BasicDetails },
    { id: 2, title: 'Services', component: ExpertiseServices },
    { id: 3, title: 'Company Size', component: CompanySize },
    { id: 4, title: 'Locations', component: Locations },
  ];

  const currentStepData = steps.find(step => step.id === currentStep);
  const progress = (currentStep / 4) * 100;

  const handleNext = (stepData: Partial<RegistrationData>) => {
    setData(prev => ({ ...prev, ...stepData }));
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit registration
      setCurrentStep(5); // Show success screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    navigate('/');
  };

  if (currentStep === 5) {
    return <SuccessScreen onComplete={handleComplete} />;
  }

  const CurrentStepComponent = currentStepData?.component;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Welcome to Admin Portal
          </h1>
          <p className="text-muted-foreground">
            Let's get your company set up in just a few steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-foreground">
              {currentStep} of 4: {currentStepData?.title}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-elevated">
            {CurrentStepComponent && (
              <CurrentStepComponent
                data={data}
                onNext={handleNext}
                onBack={handleBack}
                showBack={currentStep > 1}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};