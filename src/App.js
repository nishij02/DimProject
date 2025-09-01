import React, { useState, useEffect } from "react";
import {
  Target,
  Trophy,
  CheckCircle,
  Circle,
  User,
  Home,
  Plus,
  Trash2,
  Edit3,
  Calendar,
  BookOpen,
  Code,
  Brain,
  Star,
  TrendingUp,
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
  gradientHeader: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    marginBottom: "2rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
    transition: "all 0.2s ease",
  },
  textSmall: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  navigation: {
    backgroundColor: "white",
    padding: "1rem",
    borderBottom: "1px solid #e5e7eb",
    marginBottom: "2rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  navButton: {
    backgroundColor: "transparent",
    border: "none",
    padding: "0.5rem 1rem",
    margin: "0 0.25rem",
    borderRadius: "0.375rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#374151",
    transition: "all 0.2s",
    outline: "none",
  },
  navButtonActive: {
    backgroundColor: "#3b82f6",
    color: "white",
    outline: "none",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 8px rgba(59, 130, 246, 0.3)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  mainContent: {
    padding: "2rem 0",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s",
    outline: "none",
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
    color: "white",
  },
  dangerButton: {
    backgroundColor: "#ef4444",
    color: "white",
  },
  secondaryButton: {
    backgroundColor: "#f3f4f6",
    color: "#374151",
    border: "1px solid #d1d5db",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    maxWidth: "500px",
    width: "90%",
    maxHeight: "80vh",
    overflow: "auto",
  },
};

const LearningDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  // Set page title and meta description based on current page
  useEffect(() => {
    let title = "Learning Goal Tracker - Track Your Progress";
    let description = "A comprehensive learning dashboard to track your goals, tasks, and progress in one place.";
    
    if (currentPage === "goals") {
      title = "My Learning Goals - Learning Goal Tracker";
      description = "Manage and track your learning goals with progress indicators and due dates.";
    } else if (currentPage === "tasks") {
      title = "My Tasks - Learning Goal Tracker";
      description = "Organize and complete tasks related to your learning goals with priority levels.";
    } else if (currentPage === "profile") {
      title = "Profile & Statistics - Learning Goal Tracker";
      description = "View your learning statistics, achievements, and personal information.";
    }
    
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Update canonical URL (if needed in a real app)
    // let canonicalLink = document.querySelector('link[rel="canonical"]');
    // if (!canonicalLink) {
    //   canonicalLink = document.createElement('link');
    //   canonicalLink.rel = "canonical";
    //   document.head.appendChild(canonicalLink);
    // }
    // canonicalLink.href = window.location.href;
  }, [currentPage]);

  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn React Hooks",
      category: "Programming",
      progress: 75,
      dueDate: "2025-09-20",
      description: "Master useState, useEffect, and custom hooks",
    },
    {
      id: 2,
      title: "Complete JavaScript Course",
      category: "Programming",
      progress: 40,
      dueDate: "2025-10-15",
      description: "Advanced JS concepts and ES6+ features",
    },
    {
      id: 3,
      title: 'Read "Clean Code"',
      category: "Books",
      progress: 60,
      dueDate: "2025-09-30",
      description: "Learn best practices for writing maintainable code",
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      category: "Programming",
      progress: 25,
      dueDate: "2025-11-30",
      description: "Master common algorithms and data structures",
    },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Watch React tutorial videos", completed: true, goalId: 1, priority: "medium" },
    { id: 2, text: "Practice useState and useEffect", completed: false, goalId: 1, priority: "high" },
    { id: 3, text: "Build a small project", completed: false, goalId: 1, priority: "high" },
    { id: 4, text: "Complete modules 1-5", completed: true, goalId: 2, priority: "medium" },
    { id: 5, text: "Practice coding exercises", completed: false, goalId: 2, priority: "medium" },
    { id: 6, text: "Read chapters 1-3", completed: true, goalId: 3, priority: "low" },
    { id: 7, text: "Take notes on key concepts", completed: false, goalId: 3, priority: "medium" },
  ]);

  const [newGoal, setNewGoal] = useState({
    title: "",
    category: "Programming",
    dueDate: "",
    description: "",
  });

  const [newTask, setNewTask] = useState({
    text: "",
    goalId: "",
    priority: "medium",
  });

  const categories = ["Programming", "Books", "Design", "Languages", "Business", "Health"];
  const priorities = ["low", "medium", "high"];

  const addGoal = () => {
    if (newGoal.title.trim()) {
      const goal = {
        id: Date.now(),
        ...newGoal,
        progress: 0,
      };
      setGoals([...goals, goal]);
      setNewGoal({ title: "", category: "Programming", dueDate: "", description: "" });
      setShowModal(false);
    }
  };

  const updateGoal = (id, updates) => {
    setGoals(goals.map(goal => goal.id === id ? { ...goal, ...updates } : goal));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
    setTasks(tasks.filter(task => task.goalId !== id));
  };

  const addTask = () => {
    if (newTask.text.trim() && newTask.goalId) {
      const task = {
        id: Date.now(),
        ...newTask,
        completed: false,
        goalId: parseInt(newTask.goalId),
      };
      setTasks([...tasks, task]);
      setNewTask({ text: "", goalId: "", priority: "medium" });
      setShowModal(false);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task, completed: !task.completed };
        
        // Update goal progress based on completed tasks
        if (updatedTask.goalId) {
          const goalTasks = tasks.filter(t => t.goalId === updatedTask.goalId);
          const completedTasks = goalTasks.filter(t => t.completed);
          const progress = goalTasks.length > 0 
            ? Math.round((completedTasks.length / goalTasks.length) * 100)
            : 0;
          updateGoal(updatedTask.goalId, { progress });
        }
        return updatedTask;
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find(task => task.id === id);
    setTasks(tasks.filter(task => task.id !== id));
    
    // Update goal progress after task deletion
    if (taskToDelete && taskToDelete.goalId) {
      const goalTasks = tasks.filter(t => t.goalId === taskToDelete.goalId && t.id !== id);
      const completedTasks = goalTasks.filter(t => t.completed);
      const progress = goalTasks.length > 0 
        ? Math.round((completedTasks.length / goalTasks.length) * 100)
        : 0;
      updateGoal(taskToDelete.goalId, { progress });
    }
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    if (type === "goal" && item) {
      setNewGoal({ ...item });
    } else if (type === "task" && item) {
      setNewTask({ ...item, goalId: item.goalId.toString() });
    } else {
      // Reset form when adding new item
      if (type === "goal") {
        setNewGoal({ title: "", category: "Programming", dueDate: "", description: "" });
      } else if (type === "task") {
        setNewTask({ text: "", goalId: "", priority: "medium" });
      }
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setEditingItem(null);
    setNewGoal({ title: "", category: "Programming", dueDate: "", description: "" });
    setNewTask({ text: "", goalId: "", priority: "medium" });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "#ef4444";
      case "medium": return "#f59e0b";
      case "low": return "#10b981";
      default: return "#6b7280";
    }
  };

  const getStreakMessage = () => {
    const messages = [
      "🔥 You're on fire! Keep the momentum going!",
      "⭐ Consistency is key to mastery!",
      "🚀 Amazing dedication to learning!",
      "💪 Your future self will thank you!",
      "🎯 Focused effort leads to great results!",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const Dashboard = () => {
    const completedGoals = goals.filter((goal) => goal.progress === 100).length;
    const avgProgress = goals.length > 0 
      ? goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length 
      : 0;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const highPriorityTasks = tasks.filter(task => !task.completed && task.priority === "high").length;

    return (
      <section aria-labelledby="dashboard-title">
        <div style={styles.gradientHeader}>
          <h1 id="dashboard-title" style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem", margin: 0 }}>
            🎯 Learning Goal Tracker
          </h1>
          <p style={{ opacity: 0.9, margin: "0.5rem 0 0 0", fontSize: "1.1rem" }}>
            {getStreakMessage()}
          </p>
        </div>

        {/* Enhanced Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          <article style={{ ...styles.card, borderLeft: "4px solid #3b82f6" }}>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "600", color: "#374151", margin: 0, fontSize: "1rem" }}>Overall Progress</h2>
              <TrendingUp color="#3b82f6" size={24} aria-hidden="true" />
            </header>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb", margin: "0 0 0.5rem 0" }}>
              {avgProgress.toFixed(0)}%
            </p>
            <p style={styles.textSmall}>Average completion across all goals</p>
          </article>

          <article style={{ ...styles.card, borderLeft: "4px solid #eab308" }}>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "600", color: "#374151", margin: 0, fontSize: "1rem" }}>Achievements</h2>
              <Trophy color="#eab308" size={24} aria-hidden="true" />
            </header>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#eab308", margin: "0 0 0.5rem 0" }}>
              {completedGoals}
            </p>
            <p style={styles.textSmall}>Goals completed out of {goals.length}</p>
          </article>

          <article style={{ ...styles.card, borderLeft: "4px solid #16a34a" }}>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "600", color: "#374151", margin: 0, fontSize: "1rem" }}>Tasks Complete</h2>
              <CheckCircle color="#16a34a" size={24} aria-hidden="true" />
            </header>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#16a34a", margin: "0 0 0.5rem 0" }}>
              {completedTasks}
            </p>
            <p style={styles.textSmall}>Out of {tasks.length} total tasks</p>
          </article>

          <article style={{ ...styles.card, borderLeft: "4px solid #ef4444" }}>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "600", color: "#374151", margin: 0, fontSize: "1rem" }}>High Priority</h2>
              <Star color="#ef4444" size={24} aria-hidden="true" />
            </header>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#ef4444", margin: "0 0 0.5rem 0" }}>
              {highPriorityTasks}
            </p>
            <p style={styles.textSmall}>High priority tasks pending</p>
          </article>
        </div>

        {/* Recent Activity */}
        <div style={styles.card}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Brain color="#8b5cf6" aria-hidden="true" /> Quick Insights
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ padding: "1rem", backgroundColor: "#f0f9ff", borderRadius: "0.375rem", borderLeft: "3px solid #3b82f6" }}>
              <p style={{ margin: 0, color: "#1e40af" }}>
                💡 You're making great progress on React Hooks! Consider building a practice project to solidify your learning.
              </p>
            </div>
            <div style={{ padding: "1rem", backgroundColor: "#fef3c7", borderRadius: "0.375rem", borderLeft: "3px solid #f59e0b" }}>
              <p style={{ margin: 0, color: "#92400e" }}>
                ⚡ {highPriorityTasks > 0 ? `You have ${highPriorityTasks} high-priority tasks that need attention.` : "All caught up on high-priority tasks!"}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Goals = () => (
    <section aria-labelledby="goals-title">
      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 id="goals-title" style={{ fontSize: "1.5rem", fontWeight: "600", margin: 0 }}>My Goals</h2>
          <button
            onClick={() => openModal("goal")}
            style={{ ...styles.button, ...styles.primaryButton, display: "flex", alignItems: "center", gap: "0.5rem" }}
            aria-label="Add new goal"
          >
            <Plus size={16} aria-hidden="true" /> Add Goal
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {goals.length > 0 ? goals.map((goal) => (
            <article
              key={goal.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                backgroundColor: "#f9fafb",
                transition: "all 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {goal.category === "Programming" && <Code size={20} color="#3b82f6" aria-hidden="true" />}
                  {goal.category === "Books" && <BookOpen size={20} color="#16a34a" aria-hidden="true" />}
                  {goal.category === "Design" && <Target size={20} color="#8b5cf6" aria-hidden="true" />}
                  {goal.title}
                </h3>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => openModal("goal", goal)}
                    style={{ ...styles.button, ...styles.secondaryButton, padding: "0.25rem" }}
                    aria-label={`Edit goal: ${goal.title}`}
                  >
                    <Edit3 size={16} aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    style={{ ...styles.button, ...styles.dangerButton, padding: "0.25rem" }}
                    aria-label={`Delete goal: ${goal.title}`}
                  >
                    <Trash2 size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
              
              <p style={{ margin: "0.5rem 0", color: "#6b7280", fontSize: "0.875rem" }}>
                {goal.description}
              </p>
              
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ 
                  backgroundColor: "#dbeafe", 
                  color: "#1e40af", 
                  padding: "0.25rem 0.75rem", 
                  borderRadius: "0.375rem", 
                  fontSize: "0.75rem",
                  fontWeight: "500"
                }}>
                  {goal.category}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#6b7280", fontSize: "0.875rem" }}>
                  <Calendar size={14} aria-hidden="true" /> Due: {goal.dueDate}
                </span>
              </div>
              
              <div style={{ marginTop: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "#374151", fontWeight: "500" }}>Progress</span>
                  <span style={{ fontSize: "0.875rem", color: "#374151", fontWeight: "600" }}>{goal.progress}%</span>
                </div>
                <div style={{ 
                  width: "100%", 
                  backgroundColor: "#e5e7eb", 
                  borderRadius: "0.375rem", 
                  height: "0.75rem",
                  overflow: "hidden"
                }}>
                  <div style={{ 
                    width: `${goal.progress}%`, 
                    backgroundColor: goal.progress === 100 ? "#16a34a" : "#3b82f6", 
                    height: "100%", 
                    borderRadius: "0.375rem",
                    transition: "all 0.5s ease",
                    background: goal.progress === 100 
                      ? "linear-gradient(90deg, #16a34a, #22c55e)" 
                      : "linear-gradient(90deg, #3b82f6, #60a5fa)"
                  }} />
                </div>
              </div>
            </article>
          )) : (
            <div style={{ textAlign: "center", padding: "2rem", color: "#6b7280" }}>
              <Target size={48} color="#d1d5db" aria-hidden="true" style={{ marginBottom: "1rem" }} />
              <p>No goals yet. Add your first goal to get started!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  const Tasks = () => (
    <section aria-labelledby="tasks-title">
      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 id="tasks-title" style={{ fontSize: "1.5rem", fontWeight: "600", margin: 0 }}>My Tasks</h2>
          <button
            onClick={() => openModal("task")}
            style={{ ...styles.button, ...styles.primaryButton, display: "flex", alignItems: "center", gap: "0.5rem" }}
            aria-label="Add new task"
          >
            <Plus size={16} aria-hidden="true" /> Add Task
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {tasks.length > 0 ? tasks.map((task) => {
            const relatedGoal = goals.find(goal => goal.id === task.goalId);
            return (
              <article
                key={task.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  backgroundColor: task.completed ? "#f0f9ff" : "white",
                  transition: "all 0.2s",
                  borderLeft: `4px solid ${getPriorityColor(task.priority)}`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0px)";
                }}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", padding: 0 }}
                  aria-label={task.completed ? `Mark task "${task.text}" as incomplete` : `Mark task "${task.text}" as complete`}
                >
                  {task.completed ? (
                    <CheckCircle color="#16a34a" size={24} aria-hidden="true" />
                  ) : (
                    <Circle color="#6b7280" size={24} aria-hidden="true" />
                  )}
                </button>
                
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      color: task.completed ? "#6b7280" : "#374151",
                      textDecoration: task.completed ? "line-through" : "none",
                      fontWeight: task.completed ? "normal" : "500",
                    }}
                  >
                    {task.text}
                  </span>
                  {relatedGoal && (
                    <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.25rem" }}>
                      Goal: {relatedGoal.title}
                    </div>
                  )}
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ 
                    fontSize: "0.75rem", 
                    color: getPriorityColor(task.priority),
                    fontWeight: "500",
                    textTransform: "uppercase"
                  }}>
                    {task.priority}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{ 
                      ...styles.button, 
                      ...styles.dangerButton, 
                      padding: "0.25rem",
                      fontSize: "0.75rem"
                    }}
                    aria-label={`Delete task: ${task.text}`}
                  >
                    <Trash2 size={14} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          }) : (
            <div style={{ textAlign: "center", padding: "2rem", color: "#6b7280" }}>
              <CheckCircle size={48} color="#d1d5db" aria-hidden="true" style={{ marginBottom: "1rem" }} />
              <p>No tasks yet. Add your first task to get started!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  const Profile = () => {
    const profile = {
      name: "Learning Enthusiast",
      email: "learner@example.com",
      joinDate: "2025-01-15",
      learningStreak: 15,
      favoriteCategory: "Programming",
      totalHours: 87,
      completionRate: tasks.length > 0 
        ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)
        : 0,
    };

    return (
      <section aria-labelledby="profile-title">
        <div style={styles.card}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
            <div>
              <h2 id="profile-title" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem", margin: "0 0 0.5rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <User color="#3b82f6" aria-hidden="true" /> Profile & Statistics
              </h2>
            </div>
            <img
              src="https://i.pravatar.cc/100?u=learner"
              alt="Learning Enthusiast profile"
              style={styles.profileImage}
            />
          </header>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div>
              <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.125rem", fontWeight: "600", color: "#374151" }}>
                Personal Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  <strong style={{ color: "#374151" }}>Name:</strong> {profile.name}
                </p>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  <strong style={{ color: "#374151" }}>Email:</strong> {profile.email}
                </p>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  <strong style={{ color: "#374151" }}>Member since:</strong> {profile.joinDate}
                </p>
              </div>
            </div>
            
            <div>
              <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.125rem", fontWeight: "600", color: "#374151" }}>
                Learning Statistics
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  <strong style={{ color: "#374151" }}>Learning Streak:</strong> 
                  <span style={{ color: "#ef4444", fontWeight: "bold" }}> {profile.learningStreak} days 🔥</span>
                </p>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  <strong style={{ color: "#374151" }}>Favorite Category:</strong> {profile.favoriteCategory}
                </p>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  <strong style={{ color: "#374151" }}>Completion Rate:</strong> 
                  <span style={{ color: "#16a34a", fontWeight: "bold" }}> {profile.completionRate}%</span>
                </p>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  <strong style={{ color: "#374151" }}>Estimated Hours:</strong> {profile.totalHours}h
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem", color: "#374151" }}>
              Achievement Badges
            </h3>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {profile.learningStreak >= 7 && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", backgroundColor: "#fef3c7", borderRadius: "2rem", border: "1px solid #f59e0b" }}>
                  <span aria-hidden="true">🔥</span> <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>Week Warrior</span>
                </div>
              )}
              {goals.filter(g => g.progress === 100).length > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", backgroundColor: "#dcfce7", borderRadius: "2rem", border: "1px solid #16a34a" }}>
                  <span aria-hidden="true">🏆</span> <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>Goal Achiever</span>
                </div>
              )}
              {profile.completionRate >= 70 && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", backgroundColor: "#dbeafe", borderRadius: "2rem", border: "1px solid #3b82f6" }}>
                  <span aria-hidden="true">⭐</span> <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>Consistent Learner</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Modal = () => {
    if (!showModal) return null;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (modalType === "goal") {
        if (editingItem) {
          updateGoal(editingItem.id, newGoal);
        } else {
          addGoal();
        }
      } else if (modalType === "task") {
        if (editingItem) {
          // For simplicity, we'll just add a new task when editing
          // In a real app, you would implement task editing
          addTask();
        } else {
          addTask();
        }
      }
    };

    return (
      <div style={styles.modal} onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <h3 id="modal-title" style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem", margin: "0 0 1.5rem 0" }}>
            {editingItem ? `Edit ${modalType}` : `Add New ${modalType}`}
          </h3>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {modalType === "goal" ? (
              <>
                <div>
                  <label htmlFor="goal-title" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                    Goal Title *
                  </label>
                  <input
                    id="goal-title"
                    type="text"
                    value={newGoal.title}
                    onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                    style={{ ...styles.input, width: "100%" }}
                    placeholder="Enter your learning goal"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="goal-description" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                    Description
                  </label>
                  <textarea
                    id="goal-description"
                    value={newGoal.description}
                    onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                    style={{ ...styles.input, width: "100%", height: "80px", resize: "vertical" }}
                    placeholder="Describe what you want to achieve"
                  />
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label htmlFor="goal-category" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                      Category
                    </label>
                    <select
                      id="goal-category"
                      value={newGoal.category}
                      onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                      style={{ ...styles.input, width: "100%" }}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="goal-due-date" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                      Due Date
                    </label>
                    <input
                      id="goal-due-date"
                      type="date"
                      value={newGoal.dueDate}
                      onChange={(e) => setNewGoal({ ...newGoal, dueDate: e.target.value })}
                      style={{ ...styles.input, width: "100%" }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="task-description" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                    Task Description *
                  </label>
                  <input
                    id="task-description"
                    type="text"
                    value={newTask.text}
                    onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
                    style={{ ...styles.input, width: "100%" }}
                    placeholder="What do you need to do?"
                    required
                  />
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label htmlFor="task-goal" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                      Related Goal *
                    </label>
                    <select
                      id="task-goal"
                      value={newTask.goalId}
                      onChange={(e) => setNewTask({ ...newTask, goalId: e.target.value })}
                      style={{ ...styles.input, width: "100%" }}
                      required
                    >
                      <option value="">Select a goal</option>
                      {goals.map(goal => (
                        <option key={goal.id} value={goal.id}>
                          {goal.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="task-priority" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                      Priority
                    </label>
                    <select
                      id="task-priority"
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                      style={{ ...styles.input, width: "100%" }}
                    >
                      {priorities.map(priority => (
                        <option key={priority} value={priority}>
                          {priority.charAt(0).toUpperCase() + priority.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}
            
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                type="button"
                onClick={closeModal}
                style={{ ...styles.button, ...styles.secondaryButton }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ ...styles.button, ...styles.primaryButton }}
              >
                {editingItem ? 'Save Changes' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.body}>
      {/* Add structured data for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Learning Goal Tracker",
          "description": "A comprehensive learning dashboard to track your goals, tasks, and progress in one place.",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
      
      <div style={styles.container}>
        {/* Navigation */}
        <nav style={styles.navigation} aria-label="Main navigation">
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
            <button
              onClick={() => setCurrentPage("dashboard")}
              style={{
                ...styles.navButton,
                ...(currentPage === "dashboard" && styles.navButtonActive),
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
              aria-current={currentPage === "dashboard" ? "page" : undefined}
            >
              <Home size={16} aria-hidden="true" /> Dashboard
            </button>
            <button
              onClick={() => setCurrentPage("goals")}
              style={{
                ...styles.navButton,
                ...(currentPage === "goals" && styles.navButtonActive),
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
              aria-current={currentPage === "goals" ? "page" : undefined}
            >
              <Target size={16} aria-hidden="true" /> Goals
            </button>
            <button
              onClick={() => setCurrentPage("tasks")}
              style={{
                ...styles.navButton,
                ...(currentPage === "tasks" && styles.navButtonActive),
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
              aria-current={currentPage === "tasks" ? "page" : undefined}
            >
              <CheckCircle size={16} aria-hidden="true" /> Tasks
            </button>
            <button
              onClick={() => setCurrentPage("profile")}
              style={{
                ...styles.navButton,
                ...(currentPage === "profile" && styles.navButtonActive),
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
              aria-current={currentPage === "profile" ? "page" : undefined}
            >
              <User size={16} aria-hidden="true" /> Profile
            </button>
          </div>
        </nav>

        <main style={styles.mainContent}>
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "goals" && <Goals />}
          {currentPage === "tasks" && <Tasks />}
          {currentPage === "profile" && <Profile />}
        </main>

        <Modal />
      </div>
    </div>
  );
};

export default LearningDashboard;