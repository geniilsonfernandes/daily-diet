import { Button } from "../../components/Button";
import { MealsCard } from "../../components/MealsCard";
function Home() {
  return (
    <>
      <Button title="Nova refeição" fill={false} />
      <MealsCard status="GREEN" title="X-tudo" timer="20:00" />
      <MealsCard
        status="RED"
        title="Salada cesar com frango grelhado"
        timer="17:22"
      />
    </>
  );
}

export default Home;
