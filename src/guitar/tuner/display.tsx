import { Note } from "../modulator/types";
import styles from "./tuner.module.scss";

interface Props {
  offsetNote: Note;
}
const DisplayComponent = ({ offsetNote }: Props): JSX.Element => (
  <div className={styles.display}>{offsetNote.name}</div>
);

export default DisplayComponent;
