let catchedStudentsData = null;
let catchedStudents = null;
let catchedClasses = null;

const fetchStudentsData = async () => {
  if (catchedStudentsData) return catchedStudentsData;
  const response = await fetch('/students_data.json');
  catchedStudentsData = await response.json();
  //   console.log("catchedStudentsData: ", catchedStudentsData);

  return catchedStudentsData;
};

const fetchClasses = async () => {
  if (catchedClasses) return catchedClasses;

  const response = await fetch('/classes.json');
  catchedClasses = await response.json();
  return catchedClasses;
};

const fetchStudents = async () => {
  if (catchedStudents) return catchedStudents;

  const response = await fetch('/students.json');
  catchedStudents = await response.json();
  return catchedStudents;
};

const getStudentNameById = async (studentID) => {
  const students = await fetchStudents();
  const student = students.find((student) => student.student_id == studentID);
  return student ? student.name : null;
};

const getStudentRankingDataById = async (studentsID) => {
  const students_data = await fetchStudentsData();
  const studentRankingData = await Promise.all(
    studentsID.map(async (studentID) => {
      const student_data = students_data.find((sd) => sd.student_id === studentID);

      const studentName = await getStudentNameById(student_data.student_id);
      console.log('studentName', studentName);

      if (!student_data) {
        return null; // Handle case where student is not found
      }
      return {
        name: studentName,
        ranking_score: student_data.ranking_score,
        study_time: Math.round((student_data.student_study_progress.study_hours_weekly / 7) * 60),
        accuracy: student_data.student_study_progress.accuracy_overall,
        streak: student_data.student_study_progress.streak,
        deadline_missed: student_data.student_study_progress.deadlines_missed,
      };
    }),
  );
  const sortedStudentRankingData = await studentRankingData.sort(
    (studentA, studentB) => studentB.ranking_score - studentA.ranking_score,
  );
  return sortedStudentRankingData;
};

export const getClassRankingByID = async (classID) => {
  const classes = await fetchClasses();
  const studentsID = classes.find((cl) => cl.class_id === classID).students_id; //student ids of this class
  const classRanking = await getStudentRankingDataById(studentsID);
  //   console.log('classRanking: ', classRanking);
  return classRanking;
};

export const getStudentRankingData = async () => {
  const students_data = await fetchStudentsData();
  const studentRankingData = await Promise.all(
    studentsID.map(async (studentID) => {
      const student_data = students_data.find((sd) => sd.student_id === studentID);

      const studentName = await getStudentNameById(student_data.student_id);
      console.log('studentName', studentName);

      if (!student_data) {
        return null; // Handle case where student is not found
      }
      return {
        name: studentName,
        ranking_score: student_data.ranking_score,
        study_time: Math.round((student_data.student_study_progress.study_hours_weekly / 7) * 60),
        accuracy: student_data.student_study_progress.accuracy_overall,
        streak: student_data.student_study_progress.streak,
        deadline_missed: student_data.student_study_progress.deadlines_missed,
      };
    }),
  );
  const sortedStudentRankingData = await studentRankingData.sort(
    (studentA, studentB) => studentB.ranking_score - studentA.ranking_score,
  );
  return sortedStudentRankingData;
};

export const getAllClassRanking = async () => {
  const students_data = await fetchStudentsData();
  const classesRankingData = await Promise.all(
    students_data.map(async (student_data) => {
      const studentName = await getStudentNameById(student_data.student_id);
      return {
        name: studentName,
        ranking_score: student_data.ranking_score,
        study_time: Math.round((student_data.student_study_progress.study_hours_weekly / 7) * 60),
        accuracy: student_data.student_study_progress.accuracy_overall,
        streak: student_data.student_study_progress.streak,
        deadline_missed: student_data.student_study_progress.deadlines_missed,
      };
    }),
  );
  const sortedClassesRankingData = classesRankingData.sort(
    (studentA, studentB) => studentB.ranking_score - studentA.ranking_score,
  );
  return sortedClassesRankingData;
};
