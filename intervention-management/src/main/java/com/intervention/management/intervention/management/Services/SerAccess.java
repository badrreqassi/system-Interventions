package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.DOT.tablesName;
import com.intervention.management.intervention.management.Entity.AccessTables;
import com.intervention.management.intervention.management.Entity.OutTables;
import com.intervention.management.intervention.management.Repository.RepAccess;
import com.intervention.management.intervention.management.Repository.RepOurTables;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerAccess {
    @Autowired
    RepAccess repAccess;
    @Autowired
    RepOurTables repOurTables;


    // add
    public AccessTables addAccessTables( AccessTables accessTables,Long Tables_id){
        Optional<OutTables> tables =repOurTables.findById(Tables_id);
        System.out.println(Tables_id);
         accessTables.setOutTables(tables.get());
        return  repAccess.save(accessTables) ;

    }

    // get PassWord

    public List<tablesName> getAccessTables(String cinUser){
       return repAccess.getAccess(cinUser);

    }

    // getAllTablesName

    public List<OutTables> getAllTables( String cin){
        return repOurTables.getAllTableNameOfEmpC(cin) ;
    }

    // delete

    public  boolean deleteByCin(String cin){
        return  repAccess.deleteByCin(cin);
    }
}
