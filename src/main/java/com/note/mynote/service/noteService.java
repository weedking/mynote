package com.note.mynote.service;

import com.note.mynote.pojo.Note;

public interface noteService {
    public Note getNoteByNo(int no);
    boolean addNote(Note note);
    boolean updateNote(Note note);
    boolean deleteNote(int no);
}
