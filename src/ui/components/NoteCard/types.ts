import { Note } from "../../../types/entities";

export type NoteCardProps = Note
export type NoteElementMiniProps = Pick<Note, "id" | "name">