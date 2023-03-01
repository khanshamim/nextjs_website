import {useState, useMemo} from 'react';
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./mainMenu.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from 'next/link';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => {
  return {
    "& .MuiPaper-root": {
      marginTop: theme.spacing(1),
      minWidth: 200,
      border: `1px solid white`,
      "& .MuiMenuItem-root": {
        height: theme.spacing(4),
        minHeight: theme.spacing(4),
        "&:hover": {
          backgroundColor: 'mustardYellow',
        },
      },
    },
  };
});

const MainMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { mainMenu } = props;


  const isSubMenuActive = useMemo(() => {
    const subMenuPaths = (mainMenu?.subMenus || []).map((sm) => {
      return sm.path;
    });
    return true;//subMenuPaths?.includes(location.pathname.substring(1));
  }, []);

  const hasSubMenu = useMemo(() => {
    return !!(mainMenu?.subMenus && mainMenu.subMenus?.length);
  }, [mainMenu]);

  const handleMainMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    // Close side drawer on main menu selection.
    if (!hasSubMenu && props?.onMenuClick && props?.onMenuClick instanceof Function) {
      props.onMenuClick();
    }
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
    // Close side drawer on sub menu selection.
    if (props?.onMenuClick && props?.onMenuClick instanceof Function) {
      props.onMenuClick();
    }
  };

  const renderSubMenus = () => {
    const { subMenus } = mainMenu;
    const subMenusLength = subMenus.length || 0;

    return (
      <StyledMenu
        id={`${mainMenu.key}SubMenus`}
        MenuListProps={{
          "aria-labelledby": mainMenu.key,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleSubMenuClose}
        onClick={handleSubMenuClose}
      >
        {subMenus.map((sm, index) => {
          return (
            <Link
              key={`${sm.key}MenuItem`}
              href={sm?.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.subMenuItem} ${styles.activeSubMenu}`
                  : styles.subMenuItem
              }
              data-testid="navSubMenu"
            >
              <MenuItem key={sm.key} sx={{ bgcolor: "inherit" }}>
                <Typography variant="body1">{sm.label}</Typography>
              </MenuItem>
              {++index !== subMenusLength && <Divider flexItem />}
            </Link>
          );
        })}
      </StyledMenu>
    );
  };

  const renderMainMenu = (label, isActive) => {
    return (
      <Box sx={{ p: { xs: 0.5, lg: 0 } }}>
        <Button
          id={mainMenu.key}
          aria-controls={open ? `${mainMenu.key}SubMenus` : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="text"
          onClick={handleMainMenuClick}
          endIcon={hasSubMenu && <KeyboardArrowDownIcon sx={{ ml: -0.5 }} />}
          style={{
            color: isActive
              ? 'mustardYellow'
              : 'white',
          }}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
          data-testid="btnMainMenu"
        >
          <Typography variant="body1" color="inherit">
            {label}
          </Typography>
        </Button>
        <div className={isActive ? styles.activeMainMenu : undefined} />
      </Box>
    );
  };

  return (
    <>
      {hasSubMenu ? (
        renderMainMenu(mainMenu.label, isSubMenuActive)
      ) : (
        <Link href={mainMenu?.path} className={styles.mainMenuItem}>
          {({ isActive }) => renderMainMenu(mainMenu.label, isActive || isSubMenuActive)}
        </Link>
      )}
      {hasSubMenu && renderSubMenus()}
    </>
  );
};

export default MainMenu
