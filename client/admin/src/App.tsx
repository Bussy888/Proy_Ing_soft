import "./App.css";
import Grid from '@mui/material/Unstable_Grid2';
import Calculator from "./components/Calculator";
import SumCalculator from "./components/SumCalculator";

//const name = "Mateo Michel";
function App() {

  return (
    <>
    <Grid container spacing={2}>
        <Grid xs={12}>
      <Calculator></Calculator>
      <Grid xs={2}>
      <SumCalculator></SumCalculator>
      </Grid>
      </Grid>
      </Grid>
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