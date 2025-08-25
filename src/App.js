import React, { useState } from "react";
import {
  BookOpen,
  Target,
  Trophy,
  Plus,
  Trash2,
  CheckCircle,
  Circle,
  BarChart3,
  Calendar,
  User,
  Home,
} from "lucide-react";

const styles = {
  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    border: "3px solid #dbeafe",
  },
};

const LearningDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn React Hooks",
      category: "Programming",
      progress: 75,
      dueDate: "2025-08-20",
    },
    {
      id: 2,
      title: "Complete JavaScript Course",
      category: "Programming",
      progress: 40,
      dueDate: "2025-09-15",
    },
    {
      id: 3,
      title: 'Read "Clean Code"',
      category: "Books",
      progress: 60,
      dueDate: "2025-08-30",
    },
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Watch React tutorial videos", completed: true, goalId: 1 },
    {
      id: 2,
      text: "Practice useState and useEffect",
      completed: false,
      goalId: 1,
    },
    { id: 3, text: "Build a small project", completed: false, goalId: 1 },
    { id: 4, text: "Complete modules 1-5", completed: true, goalId: 2 },
    { id: 5, text: "Practice coding exercises", completed: false, goalId: 2 },
  ]);

  const Dashboard = () => {
    const completedGoals = goals.filter((goal) => goal.progress === 100).length;
    const avgProgress =
      goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
      <section aria-labelledby="dashboard-title">
        <div style={styles.gradientHeader}>
          {/* H1 for SEO */}
          <h1
            id="dashboard-title"
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Learning Goal Tracker Dashboard
          </h1>
          <p style={{ opacity: 0.9 }}>
            Welcome back, Learner! Keep pushing forward on your journey 🚀
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          <article style={styles.card}>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "600", color: "#374151" }}>Goals Progress</h2>
              <Target color="#3b82f6" size={24} aria-hidden="true" />
            </header>
            <p
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#2563eb",
                marginBottom: "0.5rem",
              }}
            >
              {avgProgress.toFixed(0)}%
            </p>
            <p style={styles.textSmall}>Average completion</p>
          </article>

          <article style={styles.card}>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "600", color: "#374151" }}>Completed Goals</h2>
              <Trophy color="#eab308" size={24} aria-hidden="true" />
            </header>
            <p
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#eab308",
                marginBottom: "0.5rem",
              }}
            >
              {completedGoals}
            </p>
            <p style={styles.textSmall}>Out of {goals.length} total</p>
          </article>

          <article style={styles.card}>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "600", color: "#374151" }}>Tasks Done</h2>
              <CheckCircle color="#16a34a" size={24} aria-hidden="true" />
            </header>
            <p
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#16a34a",
                marginBottom: "0.5rem",
              }}
            >
              {completedTasks}
            </p>
            <p style={styles.textSmall}>Out of {tasks.length} total</p>
          </article>
        </div>
      </section>
    );
  };

  const Goals = () => <section><h2>Goals</h2></section>;
  const Tasks = () => <section><h2>Tasks</h2></section>;

  const Profile = () => {
    const [profile, setProfile] = useState({
      name: "Learning Enthusiast",
      email: "learner@example.com",
      joinDate: "2025-01-15",
      learningStreak: 12,
      favoriteCategory: "Programming",
    });

    return (
      <section aria-labelledby="profile-title">
        <div style={styles.card}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <h2
              id="profile-title"
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              <User color="#3b82f6" aria-hidden="true" /> Profile Settings
            </h2>
            {/* Alt text for accessibility */}
            <img
              src="https://i.pravatar.cc/100?u=learner"
              alt="Profile picture of Learning Enthusiast"
              style={styles.profileImage}
            />
          </header>
        </div>
      </section>
    );
  };

  const Navigation = () => (
    <nav aria-label="Main navigation">
      <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
      <button onClick={() => setCurrentPage("goals")}>Goals</button>
      <button onClick={() => setCurrentPage("tasks")}>Tasks</button>
      <button onClick={() => setCurrentPage("profile")}>Profile</button>
    </nav>
  );

  return (
    <div style={styles.body}>
      <Navigation />
      <main>
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "goals" && <Goals />}
        {currentPage === "tasks" && <Tasks />}
        {currentPage === "profile" && <Profile />}
      </main>
    </div>
  );
};

export default LearningDashboard;
