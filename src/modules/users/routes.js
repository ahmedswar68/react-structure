import router from 'core/router';
import Users from "./components/Users";
import Login from "./components/Login";
import Guardian from './middleware/guardian';
import ReverseGuardian from './middleware/reverse-guardian';

router.add('/users', Users);
router.add('/login', Login, ReverseGuardian);
