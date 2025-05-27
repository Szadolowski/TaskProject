import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className="flex h-screen my-8 gap-8">
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
