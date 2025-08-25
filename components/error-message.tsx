import { ModelLogo } from "./model-selection/model-logo";
import { MessageAvatar } from "./prompt-kit/message";

type Props = {
  provider: string;
  errorMessage: string;
};

export const ErrorMessage = ({ provider, errorMessage }: Props) => {
  return (
    <div className="group min-h-scroll-anchor mt-[0.5px] flex w-full gap-2">
      <div className="flex items-start">
        <MessageAvatar
          className="size-5 mt-0.5"
          component={<ModelLogo provider={provider} />}
        />
      </div>
      <div className="text-red-500">
        Failed to generate response due to {errorMessage}
      </div>
    </div>
  );
};
