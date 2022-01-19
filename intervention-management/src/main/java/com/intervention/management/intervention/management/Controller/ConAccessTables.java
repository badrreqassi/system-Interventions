package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.DOT.tablesName;
import com.intervention.management.intervention.management.Entity.AccessTables;
import com.intervention.management.intervention.management.Entity.OutTables;
import com.intervention.management.intervention.management.Repository.RepOurTables;
import com.intervention.management.intervention.management.Services.SerAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Access")
@CrossOrigin(origins = "http://localhost:3000")
public class ConAccessTables {

    @Autowired
    private SerAccess serAccess;


    @PostMapping("/add/{Tables_id}")
    public AccessTables addAccessTables(@RequestBody AccessTables accessTables , @PathVariable Long Tables_id) {
        return serAccess.addAccessTables(accessTables,Tables_id);
    }

    @GetMapping("/get/{cinUser}")
    public List<tablesName> getAccess(@PathVariable String cinUser) {
        return serAccess.getAccessTables(cinUser);
    }

    @GetMapping("/AllTablesName/{cin}")
    public List<OutTables> getAllTablesName(@PathVariable String cin){
        return serAccess.getAllTables(cin);
    }

    @DeleteMapping("/delete/{cin}")
    public boolean deleteByCin(@PathVariable String cin){
        return serAccess.deleteByCin(cin);
    }
}
