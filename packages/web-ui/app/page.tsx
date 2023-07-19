import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <div className="flex h-full flex-col items-center gap-10 py-24">
      <p className="w-1/3 text-center text-2xl">
        intelli-mate is an AI tool that will allow your organization to unlock
        the full potential of AI chat with seamless collaboration. Do not miss
        out on the opportunity to revolutionize your AI experience.
      </p>
      <iframe
        src="https://embed.lottiefiles.com/animation/96654"
        className="h-[500px] w-[500px] rounded-full border-2 border-black bg-white dark:border-white"
      ></iframe>
      <div>
        <SignedIn>
          <Link href={'/rooms'}>
            <Button value="ghost" size="lg">
              Start chatting
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" afterSignInUrl="/rooms">
            <Button value="ghost" size="lg">
              Sign in
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
