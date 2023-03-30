const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id/edit', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedForm = await Project.update({
      ...req.body,
      }, { where: { id } });

    console.log(updatedForm[0])

    if (updatedForm[0] === 0) {
      return res.status(404).json({ error: 'Form not found' });
    }

    return res.status(200).json({ message: 'Form updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unable to update form' });
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
