package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.DOT.ChartEmpc;
import com.intervention.management.intervention.management.DOT.ChartFoAdmin;
import com.intervention.management.intervention.management.DOT.DiagrammeDTO;
import com.intervention.management.intervention.management.DOT.days;
import com.intervention.management.intervention.management.Entity.DayWork;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Treatment;
import com.intervention.management.intervention.management.Repository.RepDayWork;
import com.intervention.management.intervention.management.Repository.RepEmpC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerDayWork {
    @Autowired
    private RepDayWork repDayWork;
    @Autowired
    private RepEmpC repEmpC;

    //Get ALl DayWork
    public List<DayWork> GetAllDaysWork() {

        return (List<DayWork>) repDayWork.findAll();

    }

    //Get ALl DayWork R
    public List<days> GetAllDaysWork_R(String cin) {
        return repDayWork.getAllDays_R(cin);
    }

    // Get One DayWork
    public Optional<DayWork> GetOneDayWork(Long day_id) {
        return repDayWork.findById(day_id);
    }

    //Add DayWork
    public days AddDayWork(DayWork dayWork, Long empC_id) {
        Optional<Employee_Company> employee_company = repEmpC.findById(empC_id);
        dayWork.setEmployee_company(employee_company.get());
        repDayWork.save(dayWork);
        return repDayWork.getDaysById_R(dayWork.getD_work_id());
    }

    //Update DayWork
    public days UpdateOneDayWork(Long day_id, Long empC_id, DayWork dayWork) {
        Optional<DayWork> dayWork1 = repDayWork.findById(day_id);
        Optional<Employee_Company> empC = repEmpC.findById(empC_id);

        if (dayWork1.isPresent()) {
            dayWork1.get().setIntervention(dayWork.getIntervention());
            dayWork1.get().setTheDay(dayWork.getTheDay());
            dayWork1.get().setEmployee_company(empC.get());

            repDayWork.save(dayWork1.get());
            return repDayWork.getDaysById_R(dayWork1.get().getD_work_id());
        }
        return null;
    }

    //Delete DayWork
    public Long DeleteById(Long day_id) {
        Long id = day_id;
        repDayWork.deleteByIdDAY_WORK(day_id);
        System.out.println(" I'm In ");
        //    repDayWork.deleteById(day_id);

        return id;

    }

    // getDayWorkForEmpC
    public List<ChartEmpc> getDayWorkForEmpC(String cin) {
        return repDayWork.getDayWorkForEmpC(cin);
    }

    // allCharts For Admin




}
