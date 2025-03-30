import { useState, useEffect } from "react";
import axios from "axios";
import "./TodoList.css";


export default function TodoList() {
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editTaskInfo, setEditTaskInfo] = useState({ index: null, value: "" });
    const [addedTaskIndex, setAddedTaskIndex] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios
            .get("http://localhost:3001/get")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tasks:", error);
            });
    };

    const addTask = () => {
        if (taskInput.trim() !== "") {
            axios
                .post("http://localhost:3001/add", { task: taskInput })
                .then(() => {
                    fetchTasks();
                    setTaskInput("");
                    setAddedTaskIndex(tasks.length);
                })
                .catch((error) => {
                    console.error("Error adding task:", error);
                });
        }
    };

    const deleteTask = (id) => {
        axios
            .delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                fetchTasks();
            })
            .catch((error) => {
                console.error("Error deleting task:", error);
            });
    };

    const editTask = (index) => {
        setEditTaskInfo({ index, value: tasks[index].task.trim() });
    };

    const updateTask = () => {
        if (
            editTaskInfo.value.trim() !== "" &&
            editTaskInfo.value !== tasks[editTaskInfo.index].task
        ) {
            axios
                .put(`http://localhost:3001/update/${tasks[editTaskInfo.index]._id}`, {
                    task: editTaskInfo.value,
                })
                .then(() => {
                    fetchTasks();
                })
                .catch((error) => {
                    console.error("Error updating task:", error);
                });
        }
        setEditTaskInfo({ index: null, value: "" });
    };

    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={task._id}
                        className={task._id === addedTaskIndex ? "added-task" : ""}
                    >
                        {editTaskInfo.index === index ? (
                            <div className="edit-container">
                                <input
                                    type="text"
                                    value={editTaskInfo.value}
                                    onChange={(e) =>
                                        setEditTaskInfo({ ...editTaskInfo, value: e.target.value })
                                    }
                                />
                                <button onClick={updateTask}>Update</button>
                            </div>
                        ) : (
                            <div className="task-container">
                                <span>
                                    {index + 1}. {task.task}
                                </span>{" "}
                                <div>
                                    <button className="edit-btn" onClick={() => editTask(index)}>
                                        Edit
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteTask(task._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
