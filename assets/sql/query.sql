SELECT c.ID AS 'ContentID', t.ID AS 'TypeID'FROM Lesson_Content lc
INNER JOIN Content c 
ON lc.ContentID = c.ID 
INNER JOIN Type t
ON c.Type = t.ID
WHERE lc.LessonID = 1

--get table type
SELECT * FROM [Type]

--get list content by id content and content
WITH t AS(
SELECT lc.LessonID AS 'LessonID', c.Content AS 'Content'
FROM Content c
INNER JOIN Lesson_Content lc
ON c.ID = lc.ContentID
WHERE c.ID = 13)
SELECT lc.ContentID, lt.Content, lc.LessonID
FROM t lt
INNER JOIN Lesson_Content lc
ON lt.LessonID = lc.LessonID