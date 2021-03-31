import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react" 
import { SearchIcon} from '@chakra-ui/icons'

// The default icon size is 1em (16px)


export default function Search() {

  
      return (
        <div>
        <Editable w="30%"  align="center" defaultValue="Search store...">
       
          <EditablePreview />
          <EditableInput />
          <SearchIcon/>
        </Editable>
       
        </div>
      )
    }

    