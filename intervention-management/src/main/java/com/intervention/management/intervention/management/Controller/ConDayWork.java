package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.DOT.ChartEmpc;
import com.intervention.management.intervention.management.DOT.DiagrammeDTO;
import com.intervention.management.intervention.management.DOT.days;
import com.intervention.management.intervention.management.Entity.DayWork;
import com.intervention.management.intervention.management.Services.SerDayWork;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
 @CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Day")
public class ConDayWork {
    @Autowired
    private SerDayWork serDayWork;

    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }

    @GetMapping("/Days")
    public List<DayWork> getAllDaysWork(){
        return serDayWork.GetAllDaysWork();
    }

    @GetMapping("/Days/employeeCompany/R/{cin}")
    public List<days> getAllDaysWork_R( @PathVariable String cin){
        return serDayWork.GetAllDaysWork_R(cin);
    }

    @GetMapping("/Days/{day_id}")
    public Optional<DayWork> getOneDaysWork(@PathVariable Long day_id){
        return serDayWork.GetOneDayWork(day_id);
    }
    @PostMapping("/Days/add/{empC_id}")
    public days addDaysWork(@RequestBody DayWork dayWork, @PathVariable Long empC_id){
        return serDayWork.AddDayWork(dayWork,empC_id);
    }

    @PutMapping("/Days/update/{day_id}/{empC_id}")
    public days updateOneDaysWorkById(@PathVariable Long day_id, @PathVariable Long empC_id, @RequestBody DayWork dayWork ){
        return serDayWork.UpdateOneDayWork(day_id,empC_id ,dayWork);
    }

  @DeleteMapping("Days/delete/{day_id}")
  public  Long deleteDays(@PathVariable Long day_id){
        return  serDayWork.DeleteById(day_id);
  }


    @GetMapping("/Days/companyEmployee/{cin}")
    public  List<ChartEmpc> getDayWorkForEmpC(@PathVariable String cin){
        return serDayWork.getDayWorkForEmpC(cin);
    }






}
