import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import styles from "./fret.module.scss";

interface Props {
  noteName: string;
}

const NoteNameComponent = ({ noteName }: Props): JSX.Element => {
  const [toggleNotes, setToggleNotes] = useState(false);
  useHotkeys("ctrl+k", () =>
    setToggleNotes((toggleNotes) => {
      return !toggleNotes;
    }),
  );
  const toggleNoteClass = toggleNotes
    ? "notename--notesVisible"
    : "notename--notesInvisible";

  return <div className={styles[toggleNoteClass]}>{noteName}</div>;
};

export default NoteNameComponent;
