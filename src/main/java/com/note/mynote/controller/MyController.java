package com.note.mynote.controller;

import com.note.mynote.pojo.Note;
import com.note.mynote.service.noteService;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@EnableAutoConfiguration
public class MyController {
    @Resource
    private noteService noteService;

    @RequestMapping("/showNote")//查询用户
    @ResponseBody
    @CrossOrigin
    public Note showNote(@RequestParam(value = "no",required = false) String no){
        int no1 = Integer.parseInt(no);
        Note note = this.noteService.getNoteByNo(no1);
        return note;
    }
}
