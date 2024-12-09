package com.onetoanother.demo;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")

public class Indexcontroller 
{
    @GetMapping
    public String index()
    {
        return "index";
    }
    @PostMapping("/welcome")
    public String welcome(String name ,Model model)
    {
        model.addAttribute(name,"pageval");

        
        return "page1";
        

    }
    

}
