import { FormSchema } from "./RecetteForm";

export interface RecetteFormProps {
  fn: (data: {
    id: string;
    description: string;
    title: string;
  }) => Promise<void>;
  defaultValues:
    | {
        id: string;
        title: string;
        description: string;
      }
    | undefined; // | = OU donc le type est soit FormSchema soit undefined ce qui fait que le param est optionnel pour le formulaire
}
