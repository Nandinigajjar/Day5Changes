

// Using for in loop
console.log("Using for...in loop:");
for (const key in resume) {
  console.log(`${key}: ${resume[key]}`);
}

// Using for of loop with Object.entries()
console.log("\nUsing for...of loop with Object.entries():");
for (const [key, value] of Object.entries(resume)) {
  console.log(`${key}: ${value}`);
}

// Using forEach() method for arrays
console.log("\nUsing forEach() method for arrays:");
resume.education.forEach((edu, index) => {
  console.log(`Education ${index + 1}: ${edu.degree} at ${edu.institution}`);
});

resume.experience.forEach((exp, index) => {
  console.log(`Experience ${index + 1}: ${exp.title} at ${exp.company}`);
});

resume.skills.forEach((skill, index) => {
  console.log(`Skill ${index + 1}: ${skill}`);
});

resume.languages.forEach((language, index) => {
  console.log(`Language ${index + 1}: ${language}`);
});

resume.certifications.forEach((certification, index) => {
  console.log(`Certification ${index + 1}: ${certification.name}`);
});