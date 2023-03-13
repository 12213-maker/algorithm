public class Nvwa {
    public Person Create(String s){
        Person person = null;
        if(s.equals("M")){
            person = new Man();
        }else if(s.equals("W")){
            person = new Woman();
        }else if (s.equals("R")){
            person = new Robot();
        }
        return person;
    }
}

public interface Person{
    public void CreatePerson();
}

public class Man implements Person{
    public void CreatePerson(){
        System.out.print("Create a Man\n");
    }
}

public class Woman implements Person{
    public void CreatePerson(){
        System.out.print("Create a Woman\n");
    }
}

public class Robot implements Person{
    public void CreatePerson(){
        System.out.print("Create a Robot\n");
    }
}

pubilc class ceshi{
     public static void main(String[] args) {
        Nvwa nvwa = new Nvwa();
        Person P_Woman = nvwa.Create("W");
        Person P_Man = nvwa.Create("M");
        Person P_Robot = nvwa.Create("R");
        P_Woman.CreatePerson();
        P_Man.CreatePerson();
        P_Robot.CreatePerson();
    }
}







public class Man implements Person{
    public void CreatePerson(){
        System.out.print("Create a Man\n");
    }
}
public class ManFac extends PersonFac {
    public Person CreatePerson(){
        Person Man = new Man();
        return Man;
    }
}

public class Woman implements Person{
    public void CreatePerson(){
        System.out.print("Create a Woman\n");
    }
}
public class WomanFac extends PersonFac {
    public Person CreatePerson(){
        Person Woman = new Woman();
        return Woman;
    }
}

public class Robot implements Person{
    public void CreatePerson(){
        System.out.print("Create a Robot\n");
    }
}
public class RobotFac extends PersonFac {
    public Person CreatePerson(){
        Person robot = new Robot();
        return robot;
    }
}

public interface Person{
    public void CreatePerson();
}
public abstract class PersonFac{
    public abstract Person CreatePerson();
}

public class  Nvwa{
    public static void main(String[] args) throws Exception{
        PersonFac personfac = null;
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        if(s.equals("W")){
            Person P_Woman = new WomanFac().CreatePerson();
            P_Woman.CreatePerson();
        }else if (s.equals("M")){
            Person P_Man = new ManFac().CreatePerson();
            P_Man.CreatePerson();
        }else if(s.equals("R")){
            Person P_Robot = new WomanFac().CreatePerson();
            P_Robot.CreatePerson();
        }
    }
}




public interface AbstractFactory{
    public abstract TCLFac CreateTCL();
    public abstract HairFac CreateHair();
}

public interface AirCon{
    public void AirPlay();
}

public class Hair implements AirCon{
    pubilc void AirPlay(){
        System.out.println("This is a haier air conditioner");
    }
}
public class TCLAir implements AirCon{
    public void AirPlay(){
        System.out.println("This is a TCL air confitioner");
    }
}
public interface TV{
    public void TVPlay();
}
public class HairTV implements TV{
    public void TVPlay(){
        System.out.println("This is a Haier TV");
    }
}

public class TCLTV implements TV{
    public void TVPlay(){
        System.out.println("This is a TCL TV");
    }
}

public class ConCreatFacoryTCL implements AbstractFactory{
    public TCLFac CreateTCL(){
        return new TCLFac();
    }
    public HairFac CreateHair(){
        return new HairFac();
    }
}
public class ConCreatFacory implements AbstractFactory{
    public TCLFac CreateTCL(){
        return new TCLFac();
    }
    public HairFac CreateHair(){
        return new HairFac();
    }
}

public class HairFac{
    public void  CreateHaierProduction(){
        Hair air = new Hair();
        HairTV Htv = new HairTV();
        air.AirPlay();
        Htv.TVPlay();
    }
}

public class TCLFac{
    public void CreateHaierProduction(){
        TCLAir air = new TCLAir();
        TCLTV Htv = new TCLTV();
        air.AirPlay();
        Htv.TVPlay();
    }
}

public class Test{
    public static void main(String[] args){
        AbstractFactory abf = new ConCreatFacory();
        AbstractFactory abft = new ConCreatFacoryTCL();
        HairFac hfc = abf.CreateHair();
        TCLFac tfc = abfc.CreateTCL();
        hfc.CreateHaierProduction();
        tfc.CreateTCLProduction();
    }
}