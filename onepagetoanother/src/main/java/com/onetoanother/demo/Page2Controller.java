package com.onetoanother.demo;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/page2")
public class Page2Controller 
{
    @GetMapping
    String pageOne()
    {
        return "page2";
    }
    @PostMapping("/indextry")
    public String postPage2 (String name )
    {               
        return "index"; 
    }
    
}
