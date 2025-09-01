import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { X, Plus } from 'lucide-react';
import type { RegistrationData } from '../RegistrationFlow';

async function fetchServicesInAction(): Promise<string[]> {
  const paramCode = "SERVICE_EXPERTISES"
  try {
    const response = await axios.get(`http://localhost:8082/api/common/systemparameter/${paramCode}`);
    return Array.isArray(response.data.data) ? response.data.data : [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
}

interface ExpertiseServicesProps {
  data: RegistrationData;
  onNext: (data: Partial<RegistrationData>) => void;
  onBack: () => void;
  showBack: boolean;
}

export const ExpertiseServices: React.FC<ExpertiseServicesProps> = ({
  data,
  onNext,
  onBack,
  showBack,
}) => {
  const [availableServices, setAvailableServices] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>(data.services);
  const [customService, setCustomService] = useState(data.customServices);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchServicesInAction().then(setAvailableServices);
  }, []);

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
    setError('');
  };

  const addCustomService = () => {
    if (!customService.trim()) return;
    if (selectedServices.includes(customService.trim())) {
      setError('This service is already selected');
      return;
    }
    setSelectedServices(prev => [...prev, customService.trim()]);
    setCustomService('');
    setError('');
  };

  const removeService = (service: string) => {
    setSelectedServices(prev => prev.filter(s => s !== service));
  };

  const handleNext = () => {
    if (selectedServices.length === 0) {
      setError('Please select at least one service');
      return;
    }
    onNext({ services: selectedServices, customServices: customService });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          What services do you provide?
        </h2>
        <p className="text-muted-foreground">
          Select all that apply or add your own custom services
        </p>
      </div>

      {/* API Fetched Services */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Select Services</Label>
        <div className="flex flex-wrap gap-2">
          {availableServices.map(service => (
            <Badge
              key={service}
              variant={selectedServices.includes(service) ? 'default' : 'outline'}
              className="cursor-pointer px-3 py-2 text-sm hover:shadow-card transition-all"
              onClick={() => toggleService(service)}
            >
              {service}
            </Badge>
          ))}
        </div>
      </div>

      {/* Custom Service Input */}
      <div>
        <Label htmlFor="customService" className="text-sm font-medium mb-3 block">
          Add Custom Service
        </Label>
        <div className="flex gap-2">
          <Input
            id="customService"
            value={customService}
            onChange={(e) => setCustomService(e.target.value)}
            placeholder="e.g., Custom Integration Services"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addCustomService();
              }
            }}
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={addCustomService}
            disabled={!customService.trim()}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Selected Services Display */}
      {selectedServices.length > 0 && (
        <div>
          <Label className="text-sm font-medium mb-3 block">Selected Services</Label>
          <div className="flex flex-wrap gap-2">
            {selectedServices.map(service => (
              <Badge key={service} variant="secondary" className="px-3 py-2">
                {service}
                <button
                  type="button"
                  onClick={() => removeService(service)}
                  className="ml-2 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

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