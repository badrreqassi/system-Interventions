package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.Entity.Deal;
import com.intervention.management.intervention.management.Services.SerDeal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Deal")
public class ConDeal {
    @Autowired
    private SerDeal serDeal;

    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }

    @GetMapping("/Deals")
    public List<Deal> getAllDeals(){
        return serDeal.GetAllDeals();
    }
    @GetMapping("/Deals/{deal_id}")
    public Optional<Deal> getOneDeal(@PathVariable Long deal_id){
        return serDeal.GetOneDeal(deal_id);
    }
    @PutMapping("/Deals/update/{deal_id}")
    public Deal updateDealById(@PathVariable Long deal_id,@RequestBody Deal deal){
        return serDeal.UpdateDealById(deal_id,deal);
    }
    @PostMapping ("/Deals/add/{empS_id}/{company_id}")
    public Deal addDeal(@RequestBody Deal deal,@PathVariable Long empS_id,@PathVariable Long company_id){
        return serDeal.AddDeal(deal,empS_id,company_id);
    }
    @DeleteMapping("/Deals/delete/{deal_id}")
    public boolean deleteOneDealById(@PathVariable Long deal_id){
        return serDeal.DeleteDealById(deal_id);
    }
}
