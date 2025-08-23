import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Users } from 'lucide-react';
import type { RegistrationData } from '../RegistrationFlow';

const sizeOptions = [
  { value: '1-10', label: '1-10 Employees', description: 'Small team, big ambitions' },
  { value: '11-50', label: '11-50 Employees', description: 'Growing and scaling' },
  { value: '51-200', label: '51-200 Employees', description: 'Mid-size company' },
  { value: '201-500', label: '201-500 Employees', description: 'Large organization' },
  { value: '500+', label: '500+ Employees', description: 'Enterprise scale' },
];

interface CompanySizeProps {
  data: RegistrationData;
  onNext: (data: Partial<RegistrationData>) => void;
  onBack: () => void;
  showBack: boolean;
}

export const CompanySize: React.FC<CompanySizeProps> = ({
  data,
  onNext,
  onBack,
  showBack,
}) => {
  const [selectedSize, setSelectedSize] = useState(data.companySize);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!selectedSize) {
      setError('Please select your company size');
      return;
    }
    onNext({ companySize: selectedSize });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          How many people work at your company?
        </h2>
        <p className="text-muted-foreground">
          This helps us understand your organization's scale
        </p>
      </div>

      <RadioGroup
        value={selectedSize}
        onValueChange={(value) => {
          setSelectedSize(value);
          setError('');
        }}
        className="space-y-3"
      >
        {sizeOptions.map((option) => (
          <Card
            key={option.value}
            className={`p-4 cursor-pointer transition-all hover:shadow-card ${
              selectedSize === option.value 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => {
              setSelectedSize(option.value);
              setError('');
            }}
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value={option.value} id={option.value} />
              <div className="flex items-center space-x-3 flex-1">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <Label 
                    htmlFor={option.value} 
                    className="text-base font-medium cursor-pointer"
                  >
                    {option.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </RadioGroup>

      {error && (
        <p className="text-sm text-destructive text-center">{error}</p>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        {showBack ? (
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        ) : (
          <div />
        )}
        <Button onClick={handleNext} size="lg" className="px-8">
          Next
        </Button>
      </div>
    </div>
  );
};