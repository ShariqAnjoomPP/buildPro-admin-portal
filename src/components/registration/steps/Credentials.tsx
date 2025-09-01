import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { RegistrationData } from '../RegistrationFlow';

const schema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type FormData = z.infer<typeof schema>;

interface CredentialsProps {
  data: RegistrationData;
  onNext: (data: Partial<RegistrationData>) => void;
  onBack?: () => void;
  showBack?: boolean;
  loading?: boolean;
}

export const Credentials: React.FC<CredentialsProps> = ({
  data,
  onNext,
  onBack,
  showBack,
  loading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: (data as any).username || '',
      password: (data as any).password || '',
    },
  });

  const onSubmit = (formData: FormData) => {
    onNext({
      ...data,
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Set up your login credentials
        </h2>
        <p className="text-muted-foreground">
          Choose a username and password for your account
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="username" className="text-sm font-medium">
            Username *
          </Label>
          <Input
            id="username"
            placeholder="Enter a username"
            {...register('username')}
            className="mt-1"
            autoComplete="username"
          />
          {errors.username && (
            <p className="text-sm text-destructive mt-1">{errors.username.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password" className="text-sm font-medium">
            Password *
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter a password"
            {...register('password')}
            className="mt-1"
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-sm text-destructive mt-1">{errors.password.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        {showBack && (
          <Button type="button" variant="outline" onClick={onBack} disabled={loading}>
            Back
          </Button>
        )}
        <Button type="submit" size="lg" className="px-8" disabled={loading}>
          Next
        </Button>
      </div>
    </form>
  );
};