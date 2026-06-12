'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Check, Share2 } from "lucide-react";

// Inline SVGs — lucide-react v1 removed social brand icons
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

const ShareButtons = ({ url, title, description }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground flex items-center gap-1.5">
          <Share2 className="w-4 h-4" />
          Share
        </span>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30"
              onClick={() => handleShare('twitter')}
            >
              <TwitterIcon />
              <span className="sr-only">Share on Twitter</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Twitter</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30"
              onClick={() => handleShare('linkedin')}
            >
              <LinkedinIcon />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on LinkedIn</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/30"
              onClick={() => handleShare('facebook')}
            >
              <FacebookIcon />
              <span className="sr-only">Share on Facebook</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Facebook</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Link2 className="h-4 w-4" />
              )}
              <span className="sr-only">Copy link</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{copied ? 'Copied!' : 'Copy link'}</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default ShareButtons;




