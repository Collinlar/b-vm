'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapLink from '@tiptap/extension-link';
import TiptapImage from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEffect, useState } from 'react';
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  List, ListOrdered, Quote, Heading1, Heading2, Heading3,
  AlignLeft, AlignCenter, AlignRight,
  Link as LinkIcon, Image as ImageIcon,
  Undo, Redo, Code, Minus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const ToolbarButton = ({
  onClick, isActive = false, disabled = false, children, title,
}: {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
}) => (
  <Toggle
    size="sm"
    pressed={isActive}
    onPressedChange={onClick}
    disabled={disabled}
    title={title}
    className="h-8 w-8 p-0 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
  >
    {children}
  </Toggle>
);

const LinkPopover = ({ editor }: { editor: ReturnType<typeof useEditor> }) => {
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);

  const setLink = () => {
    if (!editor) return;
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    } else {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
    }
    setOpen(false);
    setUrl('');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Toggle size="sm" pressed={editor?.isActive('link')} title="Add Link"
          className="h-8 w-8 p-0 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
          <LinkIcon className="h-4 w-4" />
        </Toggle>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-3">
          <Label htmlFor="link-url">URL</Label>
          <Input id="link-url" placeholder="https://example.com" value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && setLink()} />
          <div className="flex gap-2">
            <Button size="sm" onClick={setLink}>Set Link</Button>
            {editor?.isActive('link') && (
              <Button size="sm" variant="outline" onClick={() => {
                editor.chain().focus().unsetLink().run();
                setOpen(false);
              }}>Remove</Button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ImagePopover = ({ editor }: { editor: ReturnType<typeof useEditor> }) => {
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);

  const addImage = () => {
    if (url && editor) editor.chain().focus().setImage({ src: url }).run();
    setOpen(false);
    setUrl('');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Toggle size="sm" title="Add Image" className="h-8 w-8 p-0">
          <ImageIcon className="h-4 w-4" />
        </Toggle>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-3">
          <Label htmlFor="image-url">Image URL</Label>
          <Input id="image-url" placeholder="https://example.com/image.jpg" value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addImage()} />
          <Button size="sm" onClick={addImage}>Insert Image</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const RichTextEditor = ({ content, onChange, placeholder = 'Start writing...' }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      TiptapLink.configure({ openOnClick: false, HTMLAttributes: { class: 'text-primary underline' } }),
      TiptapImage.configure({ HTMLAttributes: { class: 'rounded-lg max-w-full' } }),
      Placeholder.configure({ placeholder }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline,
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  return (
    <div className="rounded-lg border border-input bg-background">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-input p-2">
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo">
          <Undo className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo">
          <Redo className="h-4 w-4" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })} title="Heading 1">
          <Heading1 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} title="Heading 2">
          <Heading2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })} title="Heading 3">
          <Heading3 className="h-4 w-4" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} title="Bold">
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} title="Italic">
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} title="Underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')} title="Strikethrough">
          <Strikethrough className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive('code')} title="Inline Code">
          <Code className="h-4 w-4" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Align Left">
          <AlignLeft className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Align Center">
          <AlignCenter className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Align Right">
          <AlignRight className="h-4 w-4" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} title="Bullet List">
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} title="Numbered List">
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} title="Quote">
          <Quote className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule">
          <Minus className="h-4 w-4" />
        </ToolbarButton>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <LinkPopover editor={editor} />
        <ImagePopover editor={editor} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
