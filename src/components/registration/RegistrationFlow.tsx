import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BasicDetails } from './steps/BasicDetails';
import { ExpertiseServices } from './steps/ExpertiseServices';
import { CompanySize } from './steps/CompanySize';
import { Locations } from './steps/Locations';
import { SuccessScreen } from './steps/SuccessScreen';
import { Credentials } from './steps/Credentials';

export interface RegistrationData {
  username?: string;
  password?: string;
  userType?: string;
  companyName: string;
  officialEmail?: string;
  phoneNumber?: string;
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: 'Credentials', component: Credentials },
    { id: 2, title: 'Basic Details', component: BasicDetails },
    { id: 3, title: 'Services', component: ExpertiseServices },
    { id: 4, title: 'Company Size', component: CompanySize },
    { id: 5, title: 'Locations', component: Locations },
  ];

  const currentStepData = steps.find(step => step.id === currentStep);
  const progress = (currentStep / 5) * 100;

  const submitRegistration = async (registrationData: RegistrationData) => {
    setLoading(true);
    setError(null);
    try {
      // Construct payload as per API model
      const payload = {
        email: registrationData.username, // Assuming username is email
        username: registrationData.username,
        password: registrationData.password,
        userType: "BUSINESS_USER",
        phoneNumber: registrationData.phoneNumber, // Add phoneNumber to RegistrationData if needed
        businessDetailsRequest: {
          businessName: registrationData.companyName,
          companyName: registrationData.companyName,
          officialEmail: registrationData.officialEmail,
          officialPhoneNumber: registrationData.phoneNumber,
          services: registrationData.services,
        }
      };
      const response = await axios.post('http://localhost:8081/api/users/register', payload);
      console.log(response);
      if (response.data.success === true) {
        setCurrentStep(6); // Show success screen
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = (stepData: Partial<RegistrationData>) => {
    setData(prev => ({ ...prev, ...stepData }));
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit registration
      submitRegistration({ ...data, ...stepData });
      // setCurrentStep(5); // Show success screen
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

  if (currentStep === 6) {
    return <SuccessScreen onComplete={handleComplete} />;
  }

  const CurrentStepComponent = currentStepData?.component;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Welcome to BuildPro ! !
          </h1>
          <p className="text-muted-foreground">
            Let's get you onboarded in just a few steps . .
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-foreground">
              {currentStep} of 5: {currentStepData?.title}
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
                loading={loading}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};