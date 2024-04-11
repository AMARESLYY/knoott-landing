import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  stroke?: string;
}

export const IntelloLogo = ({ className, stroke }: LogoProps) => {
  return (
    <svg
      className={cn("size-4", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7904 15.3856L10.7904 15.3856L10.7916 15.3888L10.7917 15.3891L10.7917 15.3891C11.2237 16.4954 12.3115 17.2778 13.5825 17.2778C15.2294 17.2778 16.5719 15.9623 16.5719 14.3305C16.5719 14.1947 16.5625 14.0609 16.5444 13.9297C16.3944 12.8431 15.6455 11.9482 14.6404 11.5732C14.3111 11.4503 13.9544 11.3833 13.5825 11.3833C12.3115 11.3833 11.2237 12.1656 10.7917 13.2719L10.7874 13.283C10.6618 13.6088 10.593 13.962 10.593 14.3305C10.593 14.699 10.6618 15.0522 10.7874 15.378L10.7875 15.3782L10.7884 15.3806L10.7884 15.3807L10.7886 15.381L10.7903 15.3854L10.7904 15.3856L10.7904 15.3856ZM4.80319 17.2777H5.81816C6.37366 17.2777 6.79954 16.8258 6.92106 16.2734L9.29945 5.47043C9.50407 4.54163 9.32517 3.61509 8.89286 2.91517C8.4607 2.21551 7.75916 1.72222 6.92177 1.72222H4.80319C4.12131 1.72222 3.66338 2.38213 3.66338 3.06616V15.9334C3.66338 16.6172 4.12118 17.2777 4.80319 17.2777Z"
        className={cn("stroke-muted-foreground", stroke)}
        stroke-width="2"
      />
    </svg>
  );
};

export const IntelloLogoBig = ({ className, stroke }: LogoProps) => {
    return (
      <svg
        className={cn("size-4", className)}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7904 15.3856L10.7904 15.3856L10.7916 15.3888L10.7917 15.3891L10.7917 15.3891C11.2237 16.4954 12.3115 17.2778 13.5825 17.2778C15.2294 17.2778 16.5719 15.9623 16.5719 14.3305C16.5719 14.1947 16.5625 14.0609 16.5444 13.9297C16.3944 12.8431 15.6455 11.9482 14.6404 11.5732C14.3111 11.4503 13.9544 11.3833 13.5825 11.3833C12.3115 11.3833 11.2237 12.1656 10.7917 13.2719L10.7874 13.283C10.6618 13.6088 10.593 13.962 10.593 14.3305C10.593 14.699 10.6618 15.0522 10.7874 15.378L10.7875 15.3782L10.7884 15.3806L10.7884 15.3807L10.7886 15.381L10.7903 15.3854L10.7904 15.3856L10.7904 15.3856ZM4.80319 17.2777H5.81816C6.37366 17.2777 6.79954 16.8258 6.92106 16.2734L9.29945 5.47043C9.50407 4.54163 9.32517 3.61509 8.89286 2.91517C8.4607 2.21551 7.75916 1.72222 6.92177 1.72222H4.80319C4.12131 1.72222 3.66338 2.38213 3.66338 3.06616V15.9334C3.66338 16.6172 4.12118 17.2777 4.80319 17.2777Z"
          className={cn("stroke-border fill-background", stroke)}
          stroke-width=".1"
        />
      </svg>
    );
  };