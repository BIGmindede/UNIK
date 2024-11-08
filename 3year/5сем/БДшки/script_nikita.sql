CREATE DATABASE hr_service;

CREATE TABLE hr_specialists (
    specialist_id INTEGER generated always AS IDENTITY PRIMARY KEY,
    specialization VARCHAR(50) NOT NULL,
    carried_candidates INTEGER NOT NULL,
    specialist_name VARCHAR(40) NOT NULL,
    specialist_email VARCHAR(30) NOT NULL,
    specialist_tel VARCHAR(15) NOT NULL
);

CREATE TABLE interv_tasks (
    task_set_id INTEGER generated always AS IDENTITY PRIMARY KEY,
    teor_tasks_link VARCHAR(45) NOT NULL,
    prac_tasks_link VARCHAR(45) NOT NULL,
    specialist_id INTEGER REFERENCES hr_specialists(specialist_id) ON DELETE SET NULL
);

CREATE TABLE candidates (
    candidate_id INTEGER generated always AS IDENTITY PRIMARY KEY,
    candidate_name VARCHAR(40) NOT NULL,
    candidate_email VARCHAR(30) NOT NULL,
    candidate_tel VARCHAR(15) NOT NULL,
    task_set_id INTEGER REFERENCES interv_tasks(task_set_id) ON DELETE SET NULL
);

CREATE TABLE resumes (
    resume_id INTEGER generated always AS IDENTITY PRIMARY KEY,
    loading_date VARCHAR(45) NOT NULL,
    last_update_date VARCHAR(45) NOT NULL,
    resume_file VARCHAR(45) NOT NULL,
    resume_status VARCHAR(45) NOT NULL,
    candidate_id INTEGER NOT NULL REFERENCES candidates(candidate_id) ON DELETE CASCADE
);

CREATE TABLE recruiters (
    recruiter_id INTEGER generated always AS IDENTITY PRIMARY KEY,
    recruiter_name VARCHAR(45) NOT NULL,
    carried_department VARCHAR(45) NOT NULL,
    recruiter_email VARCHAR(45) NOT NULL,
    recruiter_tel VARCHAR(45) NOT NULL
);

CREATE TABLE resumes_feedbacks (
  feedback_id INTEGER generated always AS IDENTITY PRIMARY KEY,
  resume_points INTEGER NOT NULL,
  resume_conclusion VARCHAR(45) NOT NULL,
  resume_id INT NOT NULL references resumes(resume_id) ON DELETE CASCADE,
  candidate_id INT NOT NULL references candidates(candidate_id),
  recruiter_id INT NOT NULL references recruiters(recruiter_id) ON DELETE CASCADE
);


CREATE TABLE interv_results (
    results_id INTEGER generated always AS IDENTITY PRIMARY KEY,
    interv_points INTEGER NOT NULL,
    interv_conclusion VARCHAR(45) NOT NULL,
    interv_notes VARCHAR(45) NOT NULL,
    interviewed_id INTEGER NOT NULL REFERENCES candidates(candidate_id) ON DELETE CASCADE
);
----------------------------------------------------------------------

INSERT INTO hr_specialists (
specialization,
carried_candidates,
specialist_name,
specialist_email,
specialist_tel
) VALUES (
'spec1',
'2',
'spec_name1',
'spec_email1',
'spec_tel1'
);

INSERT INTO hr_specialists (
specialization,
carried_candidates,
specialist_name,
specialist_email,
specialist_tel
) VALUES (
'spec2',
'3',
'spec_name2',
'spec_email2',
'spec_tel2'
);

INSERT INTO hr_specialists (
specialization,
carried_candidates,
specialist_name,
specialist_email,
specialist_tel
) VALUES (
'spec3',
'1',
'spec_name3',
'spec_email3',
'spec_tel3'
);

INSERT INTO hr_specialists (
specialization,
carried_candidates,
specialist_name,
specialist_email,
specialist_tel
) VALUES (
'spec4',
'2',
'spec_name4',
'spec_email4',
'spec_tel4'
);

----------------------------------------------------------------------
INSERT INTO interv_tasks (
teor_tasks_link,
prac_tasks_link,
specialist_id
) VALUES (
'https://hr_service.com/teor/link1',
'https://hr_service.com/prac/link1',
1
);

INSERT INTO interv_tasks (
teor_tasks_link,
prac_tasks_link,
specialist_id
) VALUES (
'https://hr_service.com/teor/link2',
'https://hr_service.com/prac/link2',
1
);

INSERT INTO interv_tasks (
teor_tasks_link,
prac_tasks_link,
specialist_id
) VALUES (
'https://hr_service.com/teor/link3',
'https://hr_service.com/prac/link3',
2
);

INSERT INTO interv_tasks (
teor_tasks_link,
prac_tasks_link,
specialist_id
) VALUES (
'https://hr_service.com/teor/link4',
'https://hr_service.com/prac/link4',
4
);

INSERT INTO interv_tasks (
teor_tasks_link,
prac_tasks_link,
specialist_id
) VALUES (
'https://hr_service.com/teor/link5',
'https://hr_service.com/prac/link5',
3
);

INSERT INTO interv_tasks (
teor_tasks_link,
prac_tasks_link
) VALUES (
'https://hr_service.com/teor/link6',
'https://hr_service.com/prac/link6',
3
);

----------------------------------------------------------------------

INSERT INTO candidates (
candidate_name,
candidate_email,
candidate_tel,
task_set_id
) VALUES (
'cand_name1',
'cand_email1',
'cand_tel1',
1
);

INSERT INTO candidates (
candidate_name,
candidate_email,
candidate_tel,
task_set_id
) VALUES (
'cand_name2',
'cand_email2',
'cand_tel2',
2
);

INSERT INTO candidates (
candidate_name,
candidate_email,
candidate_tel,
task_set_id
) VALUES (
'cand_name3',
'cand_email3',
'cand_tel3',
3
);

INSERT INTO candidates (
candidate_name,
candidate_email,
candidate_tel,
task_set_id
) VALUES (
'cand_name4',
'cand_email4',
'cand_tel4',
3
);

INSERT INTO candidates (
candidate_name,
candidate_email,
candidate_tel,
task_set_id
) VALUES (
'cand_name5',
'cand_email5',
'cand_tel5',
3
);

----------------------------------------------------------------------

INSERT INTO resumes (
loading_date,
last_update_date,
resume_file,
resume_status,
candidate_id
) VALUES (
'2022-01-01',
'2022-03-01',
'resume1.pdf',
'accepted',
5
);

INSERT INTO resumes (
loading_date,
last_update_date,
resume_file,
resume_status,
candidate_id
) VALUES (
'2022-02-01',
'2022-04-01',
'resume2.pdf',
'accepted',
6
);

INSERT INTO resumes (
loading_date,
last_update_date,
resume_file,
resume_status,
candidate_id
) VALUES (
'2022-03-01',
'2022-05-01',
'resume3.pdf',
'accepted',
7
);

INSERT INTO resumes (
loading_date,
last_update_date,
resume_file,
resume_status,
candidate_id
) VALUES (
'2022-04-01',
'2022-06-01',
'resume4.pdf',
'accepted',
8
);


INSERT INTO resumes (
loading_date,
last_update_date,
resume_file,
resume_status,
candidate_id
) VALUES (
'2022-05-01',
'2022-07-01',
'resume5.pdf',
'accepted',
9
);

----------------------------------------------------------------------

INSERT INTO recruiters (
recruiter_name,
carried_department,
recruiter_email,
recruiter_tel
) VALUES (
'recr_name1',
'carr_dep1',
'recr_email1',
'recr_tel1'
);

INSERT INTO recruiters (
recruiter_name,
carried_department,
recruiter_email,
recruiter_tel
) VALUES (
'recr_name2',
'carr_dep2',
'recr_email2',
'recr_tel2'
);

INSERT INTO recruiters (
recruiter_name,
carried_department,
recruiter_email,
recruiter_tel
) VALUES (
'recr_name3',
'carr_dep2',
'recr_email3',
'recr_tel3'
);

INSERT INTO recruiters (
recruiter_name,
carried_department,
recruiter_email,
recruiter_tel
) VALUES (
'recr_name4',
'carr_dep3',
'recr_email4',
'recr_tel4'
);

INSERT INTO recruiters (
recruiter_name,
carried_department,
recruiter_email,
recruiter_tel
) VALUES (
'recr_name5',
'carr_dep3',
'recr_email5',
'recr_tel5'
);

----------------------------------------------------------------------

INSERT INTO resumes_feedbacks (
resume_points,
resume_conclusion,
resume_id,
candidate_id,
recruiter_id
) VALUES (
89, 'accepted',
2, 5, 1
);

INSERT INTO resumes_feedbacks (
resume_points,
resume_conclusion,
resume_id,
candidate_id,
recruiter_id
) VALUES (
91, 'accepted',
3, 6, 1
);

INSERT INTO resumes_feedbacks (
resume_points,
resume_conclusion,
resume_id,
candidate_id,
recruiter_id
) VALUES (
79, 'accepted',
4, 7, 4
);

INSERT INTO resumes_feedbacks (
resume_points,
resume_conclusion,
resume_id,
candidate_id,
recruiter_id
) VALUES (
95, 'accepted',
5, 8, 5
);

INSERT INTO resumes_feedbacks (
resume_points,
resume_conclusion,
resume_id,
candidate_id,
recruiter_id
) VALUES (
95, 'accepted',
6, 9, 4
);

----------------------------------------------------------------------

INSERT INTO interv_results (
interv_points,
interv_conclusion,
interv_notes,
interviewed_id
) VALUES (
95,
'accepted',
'completed all tasks',
5
);

INSERT INTO interv_results (
interv_points,
interv_conclusion,
interv_notes,
interviewed_id
) VALUES (
50,
'declined',
'completed less than half tasks',
6
);

INSERT INTO interv_results (
interv_points,
interv_conclusion,
interv_notes,
interviewed_id
) VALUES (
89,
'accepted',
'completed all tasks except one last',
7
);

INSERT INTO interv_results (
interv_points,
interv_conclusion,
interv_notes,
interviewed_id
) VALUES (
43,
'declined',
'completed less than half tasks',
8
);

INSERT INTO interv_results (
interv_points,
interv_conclusion,
interv_notes,
interviewed_id
) VALUES (
93,
'accepted',
'completed all tasks',
9
);

----------------------------------------------------
CREATE OR REPLACE FUNCTION count_candidates_in_queue(interviewer_id INT)
RETURNS INTEGER AS $$
DECLARE
    queue_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO queue_count
    FROM candidates
    WHERE task_set_id IN (SELECT task_set_id FROM interv_tasks WHERE specialist_id = interviewer_id);

    RETURN queue_count;
END;
$$ LANGUAGE plpgsql;

select * from hr_specialists
select * from candidates 
select * from interv_tasks
SELECT count_candidates_in_queue(1);


CREATE OR REPLACE FUNCTION get_hr_specialist_id(tasks_id INT)
RETURNS INT AS $$
DECLARE
    specialist_id INT;
BEGIN
    SELECT it.specialist_id INTO specialist_id
    FROM interv_tasks it
    WHERE task_set_id = tasks_id;

    RETURN specialist_id;
END;
$$ LANGUAGE plpgsql;

select * from hr_specialists
select * from candidates
select * from interv_tasks
SELECT get_hr_specialist_id(5);


CREATE OR REPLACE FUNCTION update_resume_status_on_feedback()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE resumes
    SET resume_status = NEW.resume_conclusion
    WHERE resume_id = NEW.resume_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER update_resume_status_trigger
AFTER INSERT ON resumes_feedbacks
FOR EACH ROW
EXECUTE FUNCTION update_resume_status_on_feedback();

select * from resumes order by resume
INSERT INTO public.resumes_feedbacks(
	resume_points, resume_conclusion, resume_id, candidate_id, recruiter_id)
	VALUES (45, 'declined', 6, 9, 5);
	

CREATE OR REPLACE FUNCTION assign_random_tasks_on_accepted_feedback()
RETURNS TRIGGER AS $$
DECLARE
    random_task_set_id INT;
BEGIN
    IF NEW.resume_conclusion = 'accepted' THEN
        SELECT task_set_id INTO random_task_set_id
        FROM interv_tasks
        ORDER BY RANDOM()
        LIMIT 1;

        UPDATE candidates
        SET task_set_id = random_task_set_id
        WHERE candidate_id = NEW.candidate_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER assign_random_tasks_trigger
AFTER INSERT ON resumes_feedbacks
FOR EACH ROW
EXECUTE FUNCTION assign_random_tasks_on_accepted_feedback();

INSERT INTO public.resumes_feedbacks(
	resume_points, resume_conclusion, resume_id, candidate_id, recruiter_id)
	VALUES (95, 'accepted', 6, 9, 5);
select * from candidates
	
	
CREATE OR REPLACE FUNCTION update_specialist_carried_candidates()
RETURNS TRIGGER AS $$
DECLARE
    spec_id INT;
    sum_cc INT;
BEGIN
    SELECT get_hr_specialist_id(NEW.task_set_id) INTO spec_id;
    SELECT count_candidates_in_queue(spec_id) INTO sum_cc;
    UPDATE hr_specialists
    SET carried_candidates = sum_cc
    WHERE specialist_id = spec_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER update_specialist_carried_candidates_trigger
AFTER UPDATE ON candidates
FOR EACH ROW
EXECUTE FUNCTION update_specialist_carried_candidates();

update candidates set task_set_id = 1 where candidate_id = 33
select * from hr_specialists


CREATE OR REPLACE PROCEDURE delete_hr_specialist(IN spec_id INT)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM hr_specialists WHERE specialist_id = spec_id;
    DELETE FROM interv_tasks WHERE specialist_id = spec_id;
    DELETE FROM candidates WHERE task_set_id IN (SELECT task_set_id FROM interv_tasks WHERE specialist_id = spec_id);
END;
$$;

CALL delete_hr_specialist(4); 


CREATE OR REPLACE PROCEDURE add_feedback(
    IN resume_points INT,
    IN resume_conclusion VARCHAR(45),
    IN resume_id INT,
    IN candidate_id INT,
    IN recruiter_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO resumes_feedbacks (resume_points, resume_conclusion, resume_id, candidate_id, recruiter_id)
    VALUES (resume_points, resume_conclusion, resume_id, candidate_id, recruiter_id);
    COMMIT;
END;
$$;

CALL add_feedback(75, 'аccepted', 5, 8, 1);
select * from resumes_feedbacks

CREATE OR REPLACE PROCEDURE add_resume(
    IN loading_date VARCHAR(45),
    IN last_update_date VARCHAR(45),
    IN resume_file VARCHAR(45),
    IN resume_status VARCHAR(45),
    IN candidate_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO resumes (loading_date, last_update_date, resume_file, resume_status, candidate_id)
    VALUES (loading_date, last_update_date, resume_file, resume_status, candidate_id);
    COMMIT;
END;
$$;

CALL add_resume('2023-01-01', '2023-01-15', 'resume_example.pdf', 'processing', 6);
select * from resumes

----------------------------------------------------

1. COUNT

SELECT
  specialist_id,
  specialization,
  carried_candidates,
  COUNT(*) OVER (PARTITION BY specialization) AS specialization_count
FROM hr_specialists;

2. AVG

SELECT
  specialist_id,
  specialization,
  carried_candidates,
  AVG(carried_candidates) OVER () AS avg_carried_candidates
FROM hr_specialists;

3. LAG

SELECT
  specialist_id,
  specialization,
  carried_candidates,
  LAG(carried_candidates) OVER (ORDER BY specialist_id) AS prev_carried_candidates
FROM hr_specialists;

4. SUM

SELECT
  task_set_id,
  teor_tasks_link,
  prac_tasks_link,
  SUM(carried_candidates) OVER (PARTITION BY specialist_id) AS total_carried_candidates
FROM interv_tasks;

5. LEAD

SELECT
  task_set_id,
  teor_tasks_link,
  prac_tasks_link,
  LEAD(teor_tasks_link) OVER (ORDER BY task_set_id) AS next_teor_tasks_link
FROM interv_tasks;

6. NTYPE

SELECT
  candidate_id,
  candidate_name,
  candidate_email,
  task_set_id,
  NTYPE() OVER (ORDER BY task_set_id) AS task_set_type
FROM candidates;

7. RANK

SELECT
  resume_id,
  resume_status,
  RANK() OVER (PARTITION BY resume_status ORDER BY loading_date) AS status_rank
FROM resumes;

8. DENSE RANK

SELECT
  resume_id,
  resume_status,
  DENSE_RANK() OVER (PARTITION BY resume_status ORDER BY loading_date) AS dense_status_rank
FROM resumes;

9. FIRST_VALUE

SELECT
  recruiter_id,
  recruiter_name,
  FIRST_VALUE(carried_department) OVER (PARTITION BY recruiter_id ORDER BY recruiter_id) AS first_carried_department
FROM recruiters;

10. LAST_VALUE

SELECT
  recruiter_id,
  recruiter_name,
  LAST_VALUE(carried_department) OVER (PARTITION BY recruiter_id ORDER BY recruiter_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_carried_department
FROM recruiters;

11.	ROW_NUMBER

SELECT 
	ROW_NUMBER() OVER (ORDER BY specialist_id) AS row_num,
    specialist_name
FROM hr_specialists;