import { Settings2Icon } from "lucide-react";
import { ConfigDialog } from "./api-key-configuration/config-dialog";
import { GitHubLink } from "./github-link";
import { ModelSelector } from "./model-selection/model-selector";
import { Profile } from "./profile";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-end gap-2 border-b border-gray-300 dark:border-gray-700">
      <div className="flex items-center gap-2 px-4">
        <ConfigDialog />
        <ModelSelector
          trigger={
            <Button variant="outline" size="sm">
              <Settings2Icon className="size-4" />
              <span className="hidden sm:block">Manage Models</span>
            </Button>
          }
        />
        <ThemeSwitcher />
        <GitHubLink />
        <Profile />
      </div>
    </header>
  );
};
