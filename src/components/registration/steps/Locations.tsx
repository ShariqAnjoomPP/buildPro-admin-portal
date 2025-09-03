import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { X, MapPin, Plus } from 'lucide-react';
import type { RegistrationData } from '../RegistrationFlow';

async function fetchOperationalLocations(): Promise<string[]> {
  const paramCode = "OPERATIONAL_LOCATIONS"
  try {
    const response = await axios.get(`http://localhost:6090/api/common/systemparameter/${paramCode}`);
    return Array.isArray(response.data.data) ? response.data.data : [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
}

interface LocationsProps {
  data: RegistrationData;
  onNext: (data: Partial<RegistrationData>) => void;
  onBack: () => void;
  showBack: boolean;
}

export const Locations: React.FC<LocationsProps> = ({
  data,
  onNext,
  onBack,
  showBack,
}) => {
  const [operationalLocations, setOperationalLocations] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>(data.locations);
  const [customLocation, setCustomLocation] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchOperationalLocations().then(setOperationalLocations);
  }, []);

  const addLocation = (location: string) => {
    const trimmedLocation = location.trim();
    if (!trimmedLocation) return;
    
    if (selectedLocations.includes(trimmedLocation)) {
      setError('This location is already selected');
      return;
    }

    setSelectedLocations(prev => [...prev, trimmedLocation]);
    setCustomLocation('');
    setError('');
  };

  const removeLocation = (location: string) => {
    setSelectedLocations(prev => prev.filter(l => l !== location));
  };

  const handleSubmit = () => {
    if (selectedLocations.length === 0) {
      setError('Please select at least one location');
      return;
    }
    onNext({ locations: selectedLocations });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Where do you operate?
        </h2>
        <p className="text-muted-foreground">
          Select all countries or regions where your company operates
        </p>
      </div>

      {/* Popular Locations */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Popular Locations</Label>
        <div className="flex flex-wrap gap-2">
          {operationalLocations.map(location => (
            <Badge
              key={location}
              variant={selectedLocations.includes(location) ? 'default' : 'outline'}
              className="cursor-pointer px-3 py-2 text-sm hover:shadow-card transition-all"
              onClick={() => addLocation(location)}
            >
              {location}
            </Badge>
          ))}
        </div>
      </div>

      {/* Custom Location Input */}
      <div>
        <Label htmlFor="customLocation" className="text-sm font-medium mb-3 block">
          Add Other Location
        </Label>
        <div className="flex gap-2">
          <Input
            id="customLocation"
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
            placeholder="e.g., Brazil, South Korea, etc."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addLocation(customLocation);
              }
            }}
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => addLocation(customLocation)}
            disabled={!customLocation.trim()}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Selected Locations Display */}
      {selectedLocations.length > 0 && (
        <div>
          <Label className="text-sm font-medium mb-3 block">Selected Locations</Label>
          <div className="flex flex-wrap gap-2">
            {selectedLocations.map(location => (
              <Badge key={location} variant="secondary" className="px-3 py-2">
                <MapPin className="h-3 w-3 mr-1" />
                {location}
                <button
                  type="button"
                  onClick={() => removeLocation(location)}
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
        <Button 
          onClick={handleSubmit} 
          size="lg" 
          className="px-8 bg-gradient-secondary hover:shadow-elevated"
        >
          Submit Registration
        </Button>
      </div>
    </div>
  );
};