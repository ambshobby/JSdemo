package com.onetoanother.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/page1")
public class Page1Controller 
{
    @GetMapping
    String pageOne()
    {
        return "page1";
    }
    @PostMapping("/postpage2")
    public String postPage2 (String name )
    {               
        return "page2"; 
    }
    
}
