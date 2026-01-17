import { LucideProps } from "lucide-react";

export function WireframeGemini(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}

export function WireframeChatGPT(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4L16.5 6.5V11.5L12 14L7.5 11.5V6.5L12 4Z" />
      <path d="M12 14V20" />
      <path d="M7.5 11.5L2.5 14.5" />
      <path d="M16.5 11.5L21.5 14.5" />
      <path d="M16.5 6.5L21.5 3.5" />
      <path d="M7.5 6.5L2.5 3.5" />
      <path d="M12 4V2" />
    </svg>
  );
}

export function WireframeAPI(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M2 12H22" />
      <path d="M12 2V22" />
      <path d="M12 12L12 12.01" />
    </svg>
  );
}

export function WireframeLocal(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9H15" />
      <path d="M9 12H15" />
      <path d="M9 15H13" />
    </svg>
  );
}
