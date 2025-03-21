import { Note } from "../../../types/entities";

export type NoteCardProps = Omit<Note, "content"> & {
    content_length: number
}
export type NoteElementMiniProps = Pick<Note, "id" | "name">