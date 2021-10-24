package ee.alex.backend.controller;


import ee.alex.backend.model.Item;
import ee.alex.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        return "ese edukalt lisatud " + item.getName();
        //Postmanis POST meetod Kasuta RAW - JSON ja formaat { "name": "ese" }
    }
}
