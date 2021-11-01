package ee.alex.backend.controller;


import ee.alex.backend.model.Item;
import ee.alex.backend.service.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {


    //seob ära itemservice classi et oleks koguaeg ligipääs olemas
    //singleton objekt ei teki iga kord uut mälukohta
    @Autowired
    ItemService itemService;

    //localhost:8080/items ja GET päring
    @GetMapping("items")
    //tagastab esemete listi päringu lõpuks
    public List<Item> getItems(){
        //pöördub itemservice funktsiooni poole ja seal tehakse repository'ga suhtlus
        return itemService.getItems();
    }

    //localhost:8080/items ja POST päring, millele on kaasa antud body
    @PostMapping("items")
    // tagastab voidiga mitte midagi (enne public string) nõuab body ja mis tüübiks ta selle body teeb
    public void postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        //return "ese edukalt lisatud " + item.getName();
        //Postmanis POST meetod Kasuta RAW - JSON ja formaat { "name": "ese" }
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @ApiOperation("API otspunkt eseme muutmiseks alati saata kaasa ID")
    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception{
        return itemService.getOneItem(id);
    }
}

