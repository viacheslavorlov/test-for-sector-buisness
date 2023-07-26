import {searchSliceActions} from '../../store/searchSlice/searchslice';
import {useAppDispatch} from '../../store/store';
import cls from './Search.module.css';
import search from '../../assets/search.svg'

interface SearchProps {
    className?: string;
}

export const Search = (props: SearchProps) => {
    const dispatch = useAppDispatch();
    const {className} = props;
    const onChangeSearchValue = (value: string) => {
        dispatch(searchSliceActions.setSearchValue(value))
    }
    return (
        <div className={className}>
            <input
                onChange={e=> onChangeSearchValue(e.target.value)}
                type="text"
                className={cls.search}
                placeholder={'Поиск'}
            />
            <img src={search} className={cls.img} alt={'search'}></img>
        </div>
    );
};


