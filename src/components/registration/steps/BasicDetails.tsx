import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { InfoIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { RegistrationData } from '../RegistrationFlow';

const schema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  website: z.string().optional(),
  description: z.string().min(10, 'Please provide at least 10 characters').max(500, 'Description too long'),
});

type FormData = z.infer<typeof schema>;

interface BasicDetailsProps {
  data: RegistrationData;
  onNext: (data: Partial<RegistrationData>) => void;
  onBack?: () => void;
  showBack?: boolean;
}

export const BasicDetails: React.FC<BasicDetailsProps> = ({ data, onNext }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      companyName: data.companyName,
      website: data.website,
      description: data.description,
    },
  });

  const description = watch('description');
  const remainingChars = 500 - (description?.length || 0);

  const onSubmit = (formData: FormData) => {
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Tell us about your company
        </h2>
        <p className="text-muted-foreground">
          We'll use this information to customize your portal experience
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="companyName" className="text-sm font-medium">
            Company Name *
          </Label>
          <Input
            id="companyName"
            placeholder="e.g., Acme Innovations Inc."
            {...register('companyName')}
            className="mt-1"
          />
          {errors.companyName && (
            <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <Label htmlFor="website" className="text-sm font-medium">
              Website
            </Label>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Optional but recommended for better profile visibility</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
            id="website"
            type="url"
            placeholder="e.g., www.acme.com"
            {...register('website')}
            className="mt-1"
          />
          {errors.website && (
            <p className="text-sm text-destructive mt-1">{errors.website.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-medium">
            Company Description *
          </Label>
          <Textarea
            id="description"
            placeholder="Brief overview of your company and what you do..."
            rows={4}
            {...register('description')}
            className="mt-1 resize-none"
          />
          <div className="flex justify-between items-center mt-1">
            {errors.description ? (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            ) : (
              <div />
            )}
            <p className={`text-sm ${remainingChars < 50 ? 'text-warning' : 'text-muted-foreground'}`}>
              {remainingChars} characters remaining
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-6">
        <Button type="submit" size="lg" className="px-8">
          Next
        </Button>
      </div>
    </form>
  );
};