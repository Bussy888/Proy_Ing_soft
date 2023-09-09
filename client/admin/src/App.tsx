import "./App.css";
import SumCalculator from "./components/SumCalculator";

const name = "Mateo Michel";
function App() {

  return (
    <>
      <SumCalculator></SumCalculator>
    </>
  );
}
/*
  const[estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const getEstudiantes = async() =>{
      const students = await getStudents();
      console.log(students)
      setEstudiantes(students.data);
    }
    getEstudiantes();
  }, []);




  <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      </Card>
*/
export default App;