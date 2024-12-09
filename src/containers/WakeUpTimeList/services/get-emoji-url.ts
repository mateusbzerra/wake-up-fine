interface Props {
  position: number;
}

const EmojiMapping: { [key: number]: string } = {
  0: "/emojis/smiling-with-hearts-emoji.svg",
  1: "/emojis/smiling-eyes-emoji.svg",
  2: "/emojis/sad-emoji-2.svg",
  3: "/emojis/sad-emoji.svg",
  4: "/emojis/cry-emoji-2.svg",
  5: "/emojis/cry-emoji.svg",
};

export const getEmojiUrl = ({ position }: Props) => {
  return EmojiMapping[position];
};
