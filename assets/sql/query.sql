SELECT c.ID AS 'ContentID', t.ID AS 'TypeID'FROM Lesson_Content lc
INNER JOIN Content c 
ON lc.ContentID = c.ID 
INNER JOIN Type t
ON c.Type = t.ID
WHERE lc.LessonID = 1

--get table type
SELECT * FROM [Type]